const Sequelize = require("sequelize");
const bcrypt = require("bcrypt");
const mail = require("../../../../config/middlewares/triggerMail");

const {
  Customer,
  ProdAttributeMap,
  Attribute,
  Categories,
} = require("../../../../models");
const {
  OPTIONS,
  generateResponse,
  generateCreateData,
} = require("../../../../config/options/global.options");
const MESSAGES = require("../../../../config/options/messages.options");
const resCode = MESSAGES.resCode;
const Op = Sequelize.Op;

const Model = Customer;
const ApiError = require("../../../../config/middlewares/api.error");
const {
  asyncHandler,
} = require("../../../../config/middlewares/async.handler");
const cloudinary = require("../../../../shared/service/cloudinary.service");

const modelObj = {
  create: asyncHandler(async (req, res) => {
    console.log("your hit the create customer with", req.body);
    let checkExisting = await Model.findOne({
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

    let user = await generateCreateData(new Model(), req.body);
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
    await user.save();
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

    console.log("your query", search);
    let offset = (page - 1) * pageSize || 0;
    let query = {
      where: {
        ...(search && {
          [Op.or]: {
            email: { [Op.like]: `%${search}%` },
            // description: { [Op.like]: `%${search}%`},
            // description: { [Op.iLike]: `%${search}%` },
          },
        }),
      },
      order: [[column, direction]],
      offset: +offset,
      limit: +pageSize,
    };
    let response = await Model.findAndCountAll(query);

    return res
      .status(resCode.HTTP_OK)
      .json(generateResponse(resCode.HTTP_OK, response));
  }),
  getById: asyncHandler(async (req, res) => {
    let existing = await Model.findOne({
      where: {
        id: req.params.id,
      },
    });

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
        id: req.params.id,
        status: [OPTIONS.defaultStatus.ACTIVE, OPTIONS.defaultStatus.INACTIVE],
        //  role: roles.getAllRolesAsArray(),
      },
    };
    let user = await Model.findOne(query);
    if (!user) {
      const errors = MESSAGES.apiErrorStrings.INVALID_REQUEST;
      return res
        .status(resCode.HTTP_BAD_REQUEST)
        .json(
          generateResponse(
            resCode.HTTP_BAD_REQUEST,
            errors,
            MESSAGES.errorTypes.ENTITY_NOT_FOUND
          )
        );
    }
    user.userName = req.body.userName || user.userName;
    user.firstName = req.body.firstName || user.firstName;
    user.lastName = req.body.lastName || user.lastName;
    user.DOB = req.body.DOB || user.DOB;
    user.gender = req.body.gender || user.gender;

    if (req.body.profileImage) {
      // user.profilePicture = req.body.profilePicture;
      //HANDLE THE PROFILE IMAGE ON CLOUDINARY IN FUTURE
    }
    await user.save();
    return res.status(resCode.HTTP_OK).json(
      generateResponse(resCode.HTTP_OK, {
        message: MESSAGES.apiSuccessStrings.UPDATE("User profile has been"),
      })
    );
  }),

  delete: asyncHandler(async (req, res) => {
    let query = {
      where: {
        id: req.params.id,
      },
    };
    let item = await Model.findOne(query);
    if (!item) {
      let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("User");
      throw new ApiError(errors, resCode.HTTP_BAD_REQUEST);
    }
    if (item && item?.profileImage) {
      await cloudinary.deleteFile(item.profileImage);
    }
    let deletedItem = await Model.destroy(query);
    return res.json(
      generateResponse(resCode.HTTP_OK, {
        message: MESSAGES.apiSuccessStrings.DELETED("User"),
      })
    );
  }),

  gotoCheck: async (req, res) => {
    try {
      console.log("you hit the resetPassword", req.body);
      let user = await Model.findOne({
        where: { email: req.body.email },
      });
      if (!user) {
        const error = MESSAGES.apiErrorStrings.INVALID_REQUEST;
        return res
          .status(resCode.HTTP_BAD_REQUEST)
          .json(generateResponse(resCode.HTTP_BAD_REQUEST, error));
      }

      if (user.resetPin === req.body.resetPin) {
        console.log("hit the setPassword", user.resetPin);
        user.password = await bcrypt.hash(
          req.body.password,
          bcrypt.genSaltSync(8)
        );
        user.resetPin = null;
        await user.save();
        return res.status(resCode.HTTP_OK).json(
          generateResponse(resCode.HTTP_OK, {
            message: MESSAGES.apiSuccessStrings.PASSWORD("set"),
          })
        );
      } else {
        let errors = MESSAGES.apiErrorStrings.INVALID_TOKEN;
        res
          .status(resCode.HTTP_INTERNAL_SERVER_ERROR)
          .json(generateResponse(resCode.HTTP_INTERNAL_SERVER_ERROR, errors));
      }
    } catch (e) {
      const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
      res
        .status(resCode.HTTP_INTERNAL_SERVER_ERROR)
        .json(generateResponse(resCode.HTTP_INTERNAL_SERVER_ERROR, errors));
      throw new Error(e);
    }
  },

  updatePassword: async (req, res) => {
    // console.log("++++++++++++++HIT The resetPassword++++++++",req.body);
    try {
      let query = {
        where: {
          id: req.body.id,
        },
      };

      let user = await Model.findOne(query);
      console.log("your got the user", user);
      if (!user) {
        let error = MESSAGES.apiErrorStrings.OTP_EXPIRED;
        return res
          .status(resCode.HTTP_BAD_REQUEST)
          .json(
            generateResponse(
              resCode.HTTP_BAD_REQUEST,
              error,
              MESSAGES.errorTypes.ENTITY_NOT_FOUND
            )
          );
      } else {
        let isMatch = await bcrypt.compare(req.body.oldPassword, user.password);
        if (isMatch) {
          if (
            user.status === OPTIONS.defaultStatus.BLOCKED ||
            user.status === OPTIONS.defaultStatus.INACTIVE
          ) {
            let errors = MESSAGES.apiErrorStrings.USER_BLOCKED;
            return res
              .status(resCode.HTTP_BAD_REQUEST)
              .json(
                generateResponse(
                  resCode.HTTP_BAD_REQUEST,
                  errors,
                  MESSAGES.errorTypes.ACCOUNT_BLOCKED
                )
              );
          }

          console.log("here at hasing");
          user.password = await bcrypt.hash(
            req.body.newPassword,
            bcrypt.genSaltSync(8)
          );
          user.verificationToken = null;
          user.verificationTokenExpireAt = null;

          await user.save();
          const message = MESSAGES.apiSuccessStrings.PASSWORD_RESET;
          return res
            .status(resCode.HTTP_OK)
            .json(generateResponse(resCode.HTTP_OK, { message }));
        } else {
          let errors = MESSAGES.apiErrorStrings.INVALID_CREDENTIALS;
          return res
            .status(resCode.HTTP_BAD_REQUEST)
            .json(
              generateResponse(
                resCode.HTTP_BAD_REQUEST,
                errors,
                MESSAGES.errorTypes.OAUTH_EXCEPTION
              )
            );
        }
      }
    } catch (e) {
      const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
      res
        .status(resCode.HTTP_INTERNAL_SERVER_ERROR)
        .json(generateResponse(resCode.HTTP_INTERNAL_SERVER_ERROR, errors));
      throw new Error(e);
    }
  },

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

    let existingUser = await Model.findOne(query);
    if (existingUser) {
      let isMatch = existingUser.validPassword(req.body.password);
      if (isMatch) {
        if (
          existingUser.status === OPTIONS.defaultStatus.BLOCKED ||
          existingUser.status === OPTIONS.defaultStatus.INACTIVE
        ) {
          let errors = MESSAGES.apiErrorStrings.USER_BLOCKED;
          return res
            .status(resCode.HTTP_BAD_REQUEST)
            .json(
              generateResponse(
                resCode.HTTP_BAD_REQUEST,
                errors,
                MESSAGES.errorTypes.ACCOUNT_BLOCKED
              )
            );
        }
        existingUser.lastLoginAt = new Date();
        await existingUser.save();
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

  forgetPassword: async (req, res) => {
    try {
      console.log("Hit the forgot Password", req.body);
      if (!req.body.email) {
        const error = MESSAGES.apiErrorStrings.INVALID_REQUEST;
        return res
          .status(resCode.HTTP_BAD_REQUEST)
          .json(generateResponse(resCode.HTTP_BAD_REQUEST, error));
      }

      let existingUser = await Model.findOne({
        where: { email: req.body.email.toLowerCase() },
      });
      if (!existingUser) {
        let errors = MESSAGES.apiErrorStrings.USER_DOES_NOT_EXIST;
        return res
          .status(resCode.HTTP_BAD_REQUEST)
          .json(
            generateResponse(
              resCode.HTTP_BAD_REQUEST,
              errors,
              MESSAGES.errorTypes.OAUTH_EXCEPTION
            )
          );
      } else {
        //  existingUser.resetPin = Math.floor(Math.random() * 899999 + 100000);
        existingUser.resetPin = Math.floor(Math.random() * 9000) + 1000;

        let user = await existingUser.save();
        let data = {
          userName: `${user.firstName} ${user.lastName}`,
          email: user.email,
          OTP: user.resetPin,
          subject: `RESET PASSWORD ${user.resetPin} `,
          companyLogo:
            "https://peacock-collective.web.app/assets/images/gold-logo.png",
          template: "resetPassword.html",
          url: `${process.env.REQ_URL}#/change-pwd?sub=${user.id}&pin=${user.resetPin}&role=${user.role}`,
        };
        mail.sendForgetMail(req, data);
        return res.status(resCode.HTTP_OK).json(
          generateResponse(resCode.HTTP_OK, {
            message: MESSAGES.apiSuccessStrings.EMAIL_FORGOT,
          })
        );
      }
    } catch (e) {
      const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
      res
        .status(resCode.HTTP_INTERNAL_SERVER_ERROR)
        .json(generateResponse(resCode.HTTP_INTERNAL_SERVER_ERROR, errors));
      throw new Error(e);
    }
  },

  verifyEmail: asyncHandler(async (req, res, next) => {
    // let user = await Model.findOne({
    //   where: { id: req.params.id },
    // });
    // console.log("user", user);

    try {
      const user = await Model.findOne({ _id: req.params.id });
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
        await user.save();
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
    } catch (error) {
      res
        .status(resCode.HTTP_INTERNAL_SERVER_ERROR)
        .json(generateResponse(resCode.HTTP_INTERNAL_SERVER_ERROR, error));
      throw new Error(e);
    }
  }),
};

module.exports = modelObj;
