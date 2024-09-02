const Sequelize = require("sequelize");
const bcrypt = require("bcrypt");
const mail = require("../../../../config/middlewares/triggerMail");

const CustomerRepository = require("../../../../models/repository/CustomerRepository");
const {
  OPTIONS,
  generateResponse,
  generateCreateData,
} = require("../../../../config/options/global.options");
const MESSAGES = require("../../../../config/options/messages.options");
const resCode = MESSAGES.resCode;
const Op = Sequelize.Op;

const ApiError = require("../../../../config/middlewares/api.error");
const {
  asyncHandler,
} = require("../../../../config/middlewares/async.handler");
const cloudinary = require("../../../../shared/service/cloudinary.service");
const QueryMailsRepository = require("../../../../models/repository/queryMailsRepository");
const modelObj = {
  create: asyncHandler(async (req, res) => {
    let checkExisting = await CustomerRepository.findOneByCondition({
      where: {
        email: req.body.email,
      },
    });
    if (checkExisting) {
      let message = MESSAGES.apiErrorStrings.Data_EXISTS("Email");
      throw new ApiError(message, resCode.HTTP_BAD_REQUEST);
    }

    let userData = req.body;
    userData.password = await bcrypt.hash(
      userData.password,
      bcrypt.genSaltSync(8)
    );

    const user = await CustomerRepository.create(userData);

    let data = {
      userName: `${user.firstName} ${user.lastName}`,
      email: user.email,
      OTP: user.resetPin,
      subject: `VERIFY EMAIL FOR PEACOCK`,
      verifyLink: `${process.env.verifyLink}/api/v1/website/customer/verifyEmail/${user.id}`,
      companyLogo:
        "https://peacock-collective.web.app/assets/images/gold-logo.png",
      template: "verifyEmail.html",
      url: `${process.env.REQ_URL}#/change-pwd?sub=${user.id}&pin=${user.resetPin}&role=${user.role}`,
    };
    mail.sendForgetMail(req, data);

    return res.status(resCode.HTTP_OK).json(
      generateResponse(resCode.HTTP_OK, {
        message: MESSAGES.apiSuccessStrings.ADDED("User"),
      })
    );
  }),

  getAll: asyncHandler(async (req, res) => {
    const {
      page = 1,
      pageSize = 10,
      column = "createdAt",
      direction = "DESC",
      search = null,
    } = req.query;

    const offset = (page - 1) * pageSize || 0;
    const query = {
      where: {
        ...(search && {
          [Op.or]: {
            email: { [Op.like]: `%${search}%` },
          },
        }),
      },
      order: [[column, direction]],
      offset: +offset,
      limit: +pageSize,
    };
    const response = await CustomerRepository.findAndCountAll(query);

    return res
      .status(resCode.HTTP_OK)
      .json(generateResponse(resCode.HTTP_OK, response));
  }),
  getById: asyncHandler(async (req, res) => {
    let existing = await CustomerRepository.findByPk(req.params.id);

    if (!existing) {
      let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("User");
      throw new ApiError(errors, resCode.HTTP_BAD_REQUEST);
    }
    return res
      .status(resCode.HTTP_OK)
      .json(generateResponse(resCode.HTTP_OK, existing));
  }),

  update: asyncHandler(async (req, res) => {
    let query = {
      where: {
        id: req.user.id,
        status: [OPTIONS.defaultStatus.ACTIVE, OPTIONS.defaultStatus.INACTIVE],
        //  role: roles.getAllRolesAsArray(),
      },
    };
    let user = await CustomerRepository.findOneByCondition(query);
    if (!user) {
      const errors = MESSAGES.apiErrorStrings.INVALID_REQUEST;
      throw new ApiError(errors, resCode.HTTP_BAD_REQUEST);
    }
    user.firstName = req.body.firstName || user.firstName;
    user.lastName = req.body.lastName || user.lastName;
    user.DOB = req.body.DOB || user.DOB;
    user.email = req.body.email || user.email;
    user.gender = req.body.gender || user.gender;

    if (req.body?.profileImage) {
      // user.profilePicture = req.body.profilePicture;
      //HANDLE THE PROFILE IMAGE ON CLOUDINARY IN FUTURE
    }
    await CustomerRepository.save(user);
    return res.status(resCode.HTTP_OK).json(
      generateResponse(resCode.HTTP_OK, {
        message: MESSAGES.apiSuccessStrings.UPDATE("User profile has been"),
      })
    );
  }),

  delete: asyncHandler(async (req, res) => {
    let user = await CustomerRepository.findByPk(req.params.id);

    if (!user) {
      let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("User");
      throw new ApiError(errors, resCode.HTTP_BAD_REQUEST);
    }

    if (user && user?.profileImage) {
      await cloudinary.deleteFile(item.profileImage);
    }

    let query = {
      where: {
        id: req.params.id,
      },
    };
    await CustomerRepository.delete(query);
    return res.json(
      generateResponse(resCode.HTTP_OK, {
        message: MESSAGES.apiSuccessStrings.DELETED("User"),
      })
    );
  }),

  resetPassword: asyncHandler(async (req, res) => {
    let user = await CustomerRepository.findByPk(req.body.id);
    if (!user) {
      const error = MESSAGES.apiErrorStrings.INVALID_REQUEST;
      throw new ApiError(error, resCode.HTTP_BAD_REQUEST);
    }
    if (user.resetPin === req.body.resetPin) {
      console.log("hit the setPassword", user.resetPin);
      user.password = await bcrypt.hash(
        req.body.password,
        bcrypt.genSaltSync(8)
      );
      user.resetPin = null;
      await CustomerRepository.save(user);
      return res.status(resCode.HTTP_OK).json(
        generateResponse(resCode.HTTP_OK, {
          message: MESSAGES.apiSuccessStrings.PASSWORD("set"),
        })
      );
    } else {
      let errors = MESSAGES.apiErrorStrings.INVALID_TOKEN;
      throw new ApiError(errors, resCode.HTTP_INTERNAL_SERVER_ERROR);
    }
  }),

  updatePassword: asyncHandler(async (req, res) => {
    let user = await CustomerRepository.findByPk(req.user.id); // here user should be find by id using req.user
    console.log("your got the user", user);
    if (!user) {
      let errors = MESSAGES.apiErrorStrings.OTP_EXPIRED;
      throw new ApiError(errors, resCode.HTTP_BAD_REQUEST);
    } else {
      let isMatch = await bcrypt.compare(req.body.oldPassword, user.password);
      if (isMatch) {
        if (
          user.status === OPTIONS.defaultStatus.BLOCKED ||
          user.status === OPTIONS.defaultStatus.INACTIVE
        ) {
          let errors = MESSAGES.apiErrorStrings.USER_BLOCKED;
          throw new ApiError(errors, resCode.HTTP_BAD_REQUEST);
        }

        console.log("your password match", isMatch);

        user.password = await bcrypt.hash(
          req.body.newPassword,
          bcrypt.genSaltSync(8)
        );

        user.verificationToken = null;
        user.verificationTokenExpireAt = null;

        await CustomerRepository.save(user);
        const message = MESSAGES.apiSuccessStrings.PASSWORD_RESET;
        return res
          .status(resCode.HTTP_OK)
          .json(generateResponse(resCode.HTTP_OK, { message }));
      } else {
        let errors = MESSAGES.apiErrorStrings.INVALID_CREDENTIALS;
        throw new ApiError(errors, resCode.HTTP_BAD_REQUEST);
      }
    }
  }),

  login: asyncHandler(async (req, res) => {
    let query = {
      where: {
        status: {
          [Op.in]: [
            OPTIONS.defaultStatus.ACTIVE,
            OPTIONS.defaultStatus.INACTIVE,
          ],
        },
        ...(req.body.email && { email: req.body.email.toLowerCase() }),
        // role: [OPTIONS.usersRoles.SUPER_ADMIN, OPTIONS.usersRoles.CUSTOMER],
      },
    };

    let existingUser = await CustomerRepository.findOneByCondition(query);
    if (existingUser) {
      let isMatch = existingUser.validPassword(req.body.password);
      if (isMatch) {
        if (
          existingUser.status === OPTIONS.defaultStatus.BLOCKED ||
          existingUser.status === OPTIONS.defaultStatus.INACTIVE
        ) {
          let errors = MESSAGES.apiErrorStrings.USER_BLOCKED;
          throw new ApiError(errors, resCode.HTTP_BAD_REQUEST);
        }
        existingUser.lastLoginAt = new Date();
        await CustomerRepository.save(existingUser);
        let userObj = {
          id: existingUser.id,
          token: existingUser.genToken(),
          role: existingUser.role,
          email: existingUser.email,
          name: `${existingUser.firstName} ${existingUser.lastName}  `,
        };
        return res
          .status(resCode.HTTP_OK)
          .json(generateResponse(resCode.HTTP_OK, userObj));
      } else {
        let errors = MESSAGES.apiErrorStrings.INVALID_CREDENTIALS;
        throw new ApiError(errors, resCode.HTTP_BAD_REQUEST);
      }
    } else {
      let errors = MESSAGES.apiErrorStrings.INVALID_CREDENTIALS;
      throw new ApiError(errors, resCode.HTTP_BAD_REQUEST);
    }
  }),

  forgetPassword: asyncHandler(async (req, res) => {
    if (!req.body.email) {
      const errors = MESSAGES.apiErrorStrings.INVALID_REQUEST;
      throw new ApiError(errors, resCode.HTTP_BAD_REQUEST);
    }

    let existingUser = await CustomerRepository.findOneByCondition({
      where: { email: req.body.email.toLowerCase() },
    });

    console.log("got the user", existingUser);
    if (!existingUser) {
      let errors = MESSAGES.apiErrorStrings.USER_DOES_NOT_EXIST;
      throw new ApiError(errors, resCode.HTTP_BAD_REQUEST);
    } else {
      //  existingUser.resetPin = Math.floor(Math.random() * 899999 + 100000);
      existingUser.resetPin = Math.floor(Math.random() * 9000) + 1000;
      existingUser.save();
      console.log("got the user existingUser", existingUser);
      let data = {
        userName: `${existingUser.firstName} ${existingUser.lastName}`,
        email: existingUser.email,
        OTP: existingUser.resetPin,
        subject: `RESET PASSWORD ${existingUser.resetPin} `,
        companyLogo:
          "https://peacock-collective.web.app/assets/images/gold-logo.png",
        template: "resetPassword.html",
        url: `${process.env.REQ_URL}auth/change-pass?sub=${existingUser.id}&pin=${existingUser.resetPin}`,
      };
      mail.sendForgetMail(req, data);
      return res.status(resCode.HTTP_OK).json(
        generateResponse(resCode.HTTP_OK, {
          message: MESSAGES.apiSuccessStrings.EMAIL_FORGOT,
        })
      );
    }
  }),
  enquiryEmail: asyncHandler(async (req, res) => {
    if (!req.body.email) {
      const errors = MESSAGES.apiErrorStrings.INVALID_REQUEST;
      throw new ApiError(errors, resCode.HTTP_BAD_REQUEST);
    }
    console.log("req.body", req.body);

    let data = {
      enquiryEmail: req.body?.email,
      enquiryMsg: req.body?.enquiryMsg,
      email: `${process.env.EMAIL_SEND_ID}`,
      subject: `Enquiry mail from ${req.body.email}`,
      companyLogo:
        "https://peacock-collective.web.app/assets/images/gold-logo.png",
      template: "enquiryEmail.html",
    };
    console.log("data", data);
    let emailPayload = {
      email: req.body?.email,
      message: req.body?.enquiryMsg,
    };
    QueryMailsRepository.create(emailPayload);
    mail.sendForgetMail(req, data);
    return res.status(resCode.HTTP_OK).json(
      generateResponse(resCode.HTTP_OK, {
        message: MESSAGES.apiSuccessStrings.SEND("Email"),
      })
    );
  }),

  verifyEmail: asyncHandler(async (req, res, next) => {
    const user = await CustomerRepository.findByPk(req.params.id);
    if (!user) {
      return res.send(`
    <div style="display: flex; justify-content: center; align-items: center; height: 100vh;">
        <h3 style="color: red; font-family: Arial;">Invalid User</h3>
      </div>
    </div>
  `);
    }

    if (user.emailVerified) {
      return res.send(`
    <div style="display: flex; justify-content: center; align-items: center; height: 100vh;">
      <div style="text-align: center;">   
        <h3 style="color: blue; font-family: Arial;">     
             Email already Verified        
        </h3>
      </div>
    </div>
  `);
    } else {
      user.emailVerified = true;
      await CustomerRepository.save(user);
      return res.send(`
    <div style="display: flex; justify-content: center; align-items: center; height: 100vh;">
      <div style="text-align: center;">   
        <h3 style="color: green; font-family: Arial;">     
             Email Verified successfully       
        </h3>
      </div>
    </div>
  `);
    }
  }),
};

module.exports = modelObj;
