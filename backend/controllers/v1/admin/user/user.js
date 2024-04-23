const fs = require("fs");
const sequelize = require("sequelize");
const bcrypt = require("bcrypt");
const Customer = require("../../../../models").Customer;
const BespokeImageMap = require("../../../../models").BespokeImageMap;
const userRepository = require("../../../../models/repository/UserRepository");
const BespokeRepository = require("../../../../models/repository/bespokeRepository");
const UserHelper = require("../../../../models/helpers/user.helpers");
const EmailRepository = require("../../../../shared/repositories/email.repository");
const mail = require("../../../../config/middlewares/triggerMail");
const {
  OPTIONS,
  generateURl,
  generateResponse,
  generateOTP,
} = require("../../../../config/options/global.options");
const MESSAGES = require("../../../../config/options/messages.options");
const ApiError = require("../../../../config/middlewares/api.error");
const {
  asyncHandler,
} = require("../../../../config/middlewares/async.handler");

const resCode = MESSAGES.resCode;
const Op = sequelize.Op;
const roles = OPTIONS.usersRoles;

const userObj = {
  //** Get all users */
  getAllUsers: asyncHandler(async (req, res) => {
    console.log("you HIT the GET all user ");
    const {
      page = 1,
      pageSize = 10,
      search = null,
      column = "createdAt",
      direction = "DESC",
    } = req.query;
    let offset = (page - 1) * pageSize || 0;
    let query = {
      where: {
        // role: { [Op.ne]: OPTIONS.usersRoles.SUPER_ADMIN },
        status: OPTIONS.defaultStatus.ACTIVE,
        ...(![undefined, null, ""].includes(search) && {
          [Op.or]: [
            { userName: { [Op.like]: search } },
            { email: { [Op.like]: search } },
            { mobile: { [Op.like]: search } },
            { anotherMobile: { [Op.like]: search } },
            { pinCode: { [Op.like]: search } },
            { city: { [Op.like]: search } },
            { address: { [Op.like]: search } },
            { state: { [Op.like]: search } },
          ],
        }),
      },
      order: [[column, direction]],
      attributes: {
        exclude: ["passwordResetToken", "passwordResetExpires", "password"],
      },
      offset: +offset,
      limit: +pageSize,
    };

    // let response = await User.findAndCountAll(query);
    let response = await userRepository.findAndCountAll(query);
    return res
      .status(resCode.HTTP_OK)
      .json(generateResponse(resCode.HTTP_OK, response));
  }),
  //** crate a new user */
  create: asyncHandler(async (req, res) => {
    /** check if user exist or not */
    let userData = req.body;
    // let existingUser = await User.findOne({
    //   where: { email: userData.email },
    // });
    let query = {
      where: { email: userData.email },
    };

    let existingUser = await userRepository.findOneByCondition(query);
    if (existingUser) {
      let errors = MESSAGES.apiErrorStrings.USER_EXISTS("email address");
      // let errors = MESSAGES.apiErrorStrings.INVALID_CREDENTIALS;
      throw new ApiError(errors, resCode.HTTP_BAD_REQUEST);
    }
    userData.password = await bcrypt.hash(
      userData.password,
      bcrypt.genSaltSync(8)
    );
    // let master = await User.create({
    //   ...new User(),
    //   ...userData,
    // });

    await userRepository.create(userData);
    // userData.deviceInfo.userId = master.id;
    // userData.deviceInfo.geoLocation = JSON.stringify(
    //   userData.deviceInfo.geoLocation
    // );
    // await userDevice.create(userData.deviceInfo);
    // await studentNotification.create({
    //   userId: master.id,
    //   title: MESSAGES.pushNotification.REGISTER_TITLE(master.name),
    //   message: MESSAGES.pushNotification.SUCCESS_REGISTER(master.name),
    // });
    // let data = {
    //   heading: MESSAGES.pushNotification.REGISTER_TITLE(master.name),
    //   description: MESSAGES.pushNotification.SUCCESS_REGISTER(master.name),
    //   type: "Welcome",
    // };
    // if (userData.deviceInfo.deviceId) {
    //   notification([{deviceId: userData.deviceInfo.deviceId }], data);
    // }
    return res.status(resCode.HTTP_OK).json(
      generateResponse(resCode.HTTP_OK, {
        message: MESSAGES.apiSuccessStrings.SIGNUP_SUCCESS,
      })
    );
  }),
  //** login user to app */
  login: asyncHandler(async (req, res) => {
    let query = {
      where: {
        status: {
          [Op.in]: [
            OPTIONS.defaultStatus.ACTIVE,
            OPTIONS.defaultStatus.INACTIVE,
          ],
        },
        ...(req.body.mobile && { mobile: req.body.mobile }),
        ...(req.body.email && { email: req.body.email.toLowerCase() }),
        role: [OPTIONS.usersRoles.SUPER_ADMIN, OPTIONS.usersRoles.CUSTOMER],
      },
    };
    // let existingUser = await User.findOne(query);
    let existingUser = await userRepository.findOneByCondition(query);
    if (existingUser) {
      let isMatch = existingUser.validPassword(req.body.password);
      if (isMatch) {
        if (
          existingUser.status === OPTIONS.defaultStatus.BLOCKED ||
          existingUser.status === OPTIONS.defaultStatus.INACTIVE
        ) {
          let errors = MESSAGES.apiErrorStrings.USER_BLOCKED;
          // let errors = MESSAGES.apiErrorStrings.INVALID_CREDENTIALS;
          throw new ApiError(errors, resCode.HTTP_BAD_REQUEST);
        }
        existingUser.lastLoginAt = new Date();
        // await existingUser.save();
        await userRepository.save(existingUser);
        let userObj = {
          id: existingUser.id,
          token: existingUser.genToken(),
          role: existingUser.role,
          email: existingUser.email,
          mobile: existingUser.mobile,
          shopName: existingUser.shopName,
          name: existingUser.name,
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
  //** get user profile */
  getProfile: asyncHandler(async (req, res) => {
    let userId = req.query.id ? req.query.id : req.user.id;
    let query = {
      where: {
        status: [OPTIONS.defaultStatus.ACTIVE, OPTIONS.defaultStatus.INACTIVE],
        role: {
          [Op.or]: OPTIONS.usersRoles.getAllRolesAsArray(),
        },
        id: userId,
      },
      attributes: {
        exclude: [
          "password",
          "passwordResetExpires",
          "passwordResetToken",
          "updatedAt",
          "isEmailVerified",
          "lastLoginAt",
          "verificationToken",
          "verificationTokenExpireAt",
        ],
      },
    };

    // let user = await User.findOne(query);
    let user = await userRepository.findOneByCondition(query);

    if (user) {
      let existingUser = user.toJSON();
      existingUser["token"] = user.genToken();
      return res.json(generateResponse(resCode.HTTP_OK, existingUser));
    } else {
      const error = MESSAGES.apiErrorStrings.INVALID_REQUEST;
      throw new ApiError(error, resCode.HTTP_BAD_REQUEST);
    }
  }),
  //** update the user profile */
  updateProfile: asyncHandler(async (req, res) => {
    let query = {
      where: {
        id: req.params.id,
        status: [OPTIONS.defaultStatus.ACTIVE, OPTIONS.defaultStatus.INACTIVE],
        role: roles.getAllRolesAsArray(),
      },
    };
    // let user = await User.findOne(query);
    let user = await userRepository.findOneByCondition(query);

    if (!user) {
      const errors = MESSAGES.apiErrorStrings.INVALID_REQUEST;
      // let errors = MESSAGES.apiErrorStrings.INVALID_CREDENTIALS;
      throw new ApiError(errors, resCode.HTTP_NOT_FOUND);
    }

    user.userName = req.body.userName || user.userName;
    user.firstName = req.body.firstName || user.firstName;
    user.lastName = req.body.lastName || user.lastName;
    user.shopName = req.body.shopName || user.shopName;
    let emailChange = false;
    if (req.body.email && user.email !== req.body.email) {
      let existingUserWithEmail = await UserHelper.findUserWithSameData({
        email: req.body.email.toLowerCase(),
      });

      if (existingUserWithEmail) {
        const errors = MESSAGES.apiErrorStrings.USER_EXISTS("email address");
        //   let errors = MESSAGES.apiErrorStrings.INVALID_CREDENTIALS;
        throw new ApiError(errors, resCode.HTTP_BAD_REQUEST);
      }
      emailChange = true;
      user.email = req.body.email.toLowerCase();
      user.changeEmail = req.body.email.toLowerCase();
    }
    if (req.body.dob) {
      user.dob = req.body.dob;
    }
    if (req.body.gender && user.gender !== req.body.gender) {
      user.gender = req.body.gender;
    }

    user.countryCode = req.body.countryCode || user.countryCode;
    user.mobileCode = req.body.mobileCode || user.mobileCode;
    user.mobile = req.body.mobile || user.mobile;
    user.city = req.body.city || user.city;
    user.state = req.body.state || user.state;
    user.bio = req.body.bio;
    user.address = req.body.address || user.address;
    user.websiteUrl = req.body.websiteUrl;
    user.countryName = req.body.countryName || user.countryName;

    if (req.body.profilePicture) {
      user.profilePicture = req.body.profilePicture;
    }
    if (req.body.coverPicture) {
      user.coverPicture = req.body.coverPicture;
    }
    await userRepository.save(user);
    return res.status(resCode.HTTP_OK).json(
      generateResponse(resCode.HTTP_OK, {
        message: MESSAGES.apiSuccessStrings.UPDATE("User profile has been"),
      })
    );
  }),
  // delete the user profile
  delete: asyncHandler(async (req, res) => {
    let query = {
      where: {
        status: [OPTIONS.defaultStatus.ACTIVE, OPTIONS.defaultStatus.INACTIVE],
        id: req.params.id,
      },
    };
    // let existingUser = await User.findOne(query);
    let existingUser = await userRepository.findOneByCondition(query);
    if (existingUser) {
      existingUser.status = OPTIONS.defaultStatus.DELETED;
      existingUser.userName =
        existingUser.userName + Date.now() + OPTIONS.defaultStatus.DELETED;
      await userRepository.save(existingUser);
      return res.json(
        generateResponse(resCode.HTTP_OK, {
          message: MESSAGES.apiSuccessStrings.DELETED(" User"),
        })
      );
    } else {
      let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("User");
      throw new ApiError(errors, resCode.HTTP_BAD_REQUEST);
    }
  }),
  //** verify email */
  emailVerify: async (req, res) => {
    try {
      if (!req.params.token) {
        // let error = MESSAGES.apiErrorStrings.INVALID_REQUEST;
        let errors = MESSAGES.apiErrorStrings.INVALID_CREDENTIALS;
        throw new ApiError(errors, resCode.HTTP_BAD_REQUEST);
      }

      let query = {
        where: {
          status: OPTIONS.defaultStatus.ACTIVE,
          verificationTokenExpireAt: req.params.token,
          role: OPTIONS.usersRoles.USER,
        },
      };

      // let existingUser = await User.findOne(query);
      let existingUser = await userRepository.findOneByCondition(query);

      if (!existingUser) {
        const errors = MESSAGES.apiErrorStrings.INVALID_TOKEN;
        // let errors = MESSAGES.apiErrorStrings.INVALID_CREDENTIALS;
        throw new ApiError(errors, resCode.HTTP_BAD_REQUEST);
      }

      let emailChange = false;
      if (existingUser.isEmailVerified && existingUser.changeEmail) {
        existingUser.email = existingUser.changeEmail;
        existingUser.changeEmail = null;
        emailChange = true;
      }

      existingUser.isEmailVerified = true;
      existingUser.verificationTokenExpireAt = null;

      // await existingUser.save();

      await userRepository.save(existingUser);

      let message = MESSAGES.apiSuccessStrings.EMAIL_UPDATE;
      if (!emailChange) {
        message = MESSAGES.apiSuccessStrings.UPDATE("User profile");
        await EmailRepository.sendWelcomeEmail(existingUser);
      }

      return res
        .status(resCode.HTTP_OK)
        .json(generateResponse(resCode.HTTP_OK, { message }));
    } catch (e) {
      const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
      // let errors = MESSAGES.apiErrorStrings.INVALID_CREDENTIALS;
      throw new ApiError(errors, resCode.HTTP_BAD_REQUEST);
    }
  },
  //** send token for  */
  sendToken: async (req, res) => {
    req.assert("email", "Email cannot be blank").notEmpty();
    let errors = req.validationErrors();
    if (errors) {
      return res
        .status(resCode.HTTP_BAD_REQUEST)
        .json(
          generateResponse(
            resCode.HTTP_BAD_REQUEST,
            errors,
            MESSAGES.errorTypes.INPUT_VALIDATION
          )
        );
    }

    // let existingUser = await User.findOne({
    //   where: {
    //     status: OPTIONS.defaultStatus.ACTIVE,
    //     email: req.body.email,
    //   },
    // });

    let query = {
      where: {
        status: OPTIONS.defaultStatus.ACTIVE,
        email: req.body.email,
      },
    };

    let existingUser = await userRepository.findOneByCondition(query);

    if (!existingUser) {
      const message = MESSAGES.apiErrorStrings.USER_EXISTS("email address");
      return res
        .status(resCode.HTTP_BAD_REQUEST)
        .json(
          generateResponse(
            resCode.HTTP_BAD_REQUEST,
            message,
            MESSAGES.errorTypes.INPUT_VALIDATION
          )
        );
    } else {
      let today = time.getDateTime();
      today.setDate(today.getDate() + OPTIONS.otpExpireInDays);
      existingUser.verificationToken = generateOTP(5);
      existingUser.verificationTokenExpireAt = today;
      let token = existingUser.genToken();
      // await existingUser.save();
      await userRepository.save(existingUser);
      return res.status(resCode.HTTP_OK).json(
        generateResponse(resCode.HTTP_OK, {
          token: token,
        })
      );
    }
  },
  //** verify the token */
  verifyToken: async (req, res) => {
    req.assert("otp", "Please enter a valid otp.").notEmpty();
    req.assert("email", "Email cannot be blank").notEmpty();

    let errors = req.validationErrors();
    if (errors) {
      return res
        .status(resCode.HTTP_BAD_REQUEST)
        .json(
          generateResponse(
            resCode.HTTP_BAD_REQUEST,
            errors,
            MESSAGES.errorTypes.INPUT_VALIDATION
          )
        );
    }
    let query = {
      where: {
        status: OPTIONS.defaultStatus.ACTIVE,
        role: [roles.SUPER_ADMIN, roles.ADMIN],
        verificationToken: req.body.otp,
        email: req.body.email,
        verificationTokenExpireAt: { [Op.gte]: time.getDateTime() },
      },
    };

    // let existingUser = await User.findOne(query);
    let existingUser = await userRepository.findOneByCondition(query);
    if (!existingUser) {
      let error = MESSAGES.apiErrorStrings.OTP_EXPIRED;
      return res
        .status(resCode.HTTP_BAD_REQUEST)
        .json(
          generateResponse(
            resCode.HTTP_BAD_REQUEST,
            error,
            MESSAGES.errorTypes.INPUT_VALIDATION
          )
        );
    }
    existingUser.isEmailVerified = true;
    existingUser.verificationToken = null;
    existingUser.verificationTokenExpireAt = null;

    // await existingUser.save();
    await userRepository.save(existingUser);
    const message = MESSAGES.apiSuccessStrings.OTP_VERIFIED;

    return res
      .status(resCode.HTTP_OK)
      .json(generateResponse(resCode.HTTP_OK, { message }));
  },
  //** reset the password */
  resetPassword: async (req, res) => {
    console.log("++++++++++++++HIT The resetPassword++++++++");

    let query = {
      where: {
        id: req.body.id,
      },
    };

    // let user = await User.findOne(query);
    let user = await userRepository.findOneByCondition(query);

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

        user.password = await bcrypt.hash(
          req.body.newPassword,
          bcrypt.genSaltSync(8)
        );
        user.verificationToken = null;
        user.verificationTokenExpireAt = null;

        // await user.save();
        await userRepository.save(user);

        const message = MESSAGES.apiSuccessStrings.PASSWORD_RESET;
        return res
          .status(resCode.HTTP_OK)
          .json(generateResponse(resCode.HTTP_OK, { message }));
        // if (req.body.email && !user.isEmailVerified) {
        // 	let todayDate = new Date();
        // 	todayDate.setDate(
        // 		todayDate.getDate() + OPTIONS.emailVerificationExpireInDays
        // 	);
        // 	let token = generateOTP();
        // 	existingUser
        // 		.update({
        // 			verificationTokenExpireAt: todayDate,
        // 			verificationToken: token,
        // 		})
        // 		.then();
        // 	// await EmailRepository.sendOTPEmail(existingUser);
        // 	let errors = MESSAGES.apiErrorStrings.ACTIVATE_ACCOUNT;
        // 	return res
        // 		.status(resCode.HTTP_BAD_REQUEST)
        // 		.json(
        // 			generateResponse(
        // 				resCode.HTTP_BAD_REQUEST,
        // 				errors,
        // 				MESSAGES.errorTypes.EMAIL_NOT_VERIFIED
        // 			)
        // 		);
        // }

        // existingUser.lastLoginAt = new Date();
        // await existingUser.save();

        // let userObj = {
        // 	id: existingUser.id,
        // 	token: existingUser.genToken(),
        // 	role: existingUser.role,
        // 	email: existingUser.email,
        // 	firstName: existingUser.firstName,
        // 	lastName: existingUser.lastName,
        // };

        // return res
        // 	.status(resCode.HTTP_OK)
        // 	.json(generateResponse(resCode.HTTP_OK, userObj));
      } else {
        let errors = MESSAGES.apiErrorStrings.INVALID_CREDENTIALS;
        // let errors = MESSAGES.apiErrorStrings.INVALID_CREDENTIALS;
        throw new ApiError(errors, resCode.HTTP_BAD_REQUEST);
      }
    }
  },
  //** forget password **/
  forgetPassword: async (req, res) => {
    if (!req.body.email) {
      const errors = MESSAGES.apiErrorStrings.INVALID_REQUEST;
      // let errors = MESSAGES.apiErrorStrings.INVALID_CREDENTIALS;
      throw new ApiError(errors, resCode.HTTP_BAD_REQUEST);
    }
    // let existingUser = await User.findOne({
    //   where: { email: req.body.email.toLowerCase() },
    // });
    let query = {
      where: { email: req.body.email.toLowerCase() },
    };
    let existingUser = await userRepository.findOneByCondition(query);
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

      // let user = await existingUser.save();
      let user = await userRepository.save(user);
      let data = {
        userName: `${user.userName}`,
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
  },
  //** set the password */
  setPassword: async (req, res) => {
    // let user = await User.findOne({
    //   where: { email: req.body.email },
    // });

    let query = {
      where: { email: req.body.email },
    };

    let user = await userRepository.findOneByCondition(query);
    if (!user) {
      const error = MESSAGES.apiErrorStrings.INVALID_REQUEST;
      return res
        .status(resCode.HTTP_BAD_REQUEST)
        .json(generateResponse(resCode.HTTP_BAD_REQUEST, error));
    } else {
      if (user.resetPin === req.body.resetPin) {
        console.log("hit the setPassword", user.resetPin);
        user.password = await bcrypt.hash(
          req.body.password,
          bcrypt.genSaltSync(8)
        );
        user.resetPin = null;
        // await user.save();
        await userRepository.save(user);
        return res.status(resCode.HTTP_OK).json(
          generateResponse(resCode.HTTP_OK, {
            message: MESSAGES.apiSuccessStrings.PASSWORD("set"),
          })
        );
      } else {
        let errors = MESSAGES.apiErrorStrings.INVALID_TOKEN;
        // let errors = MESSAGES.apiErrorStrings.INVALID_CREDENTIALS;
        throw new ApiError(errors, resCode.HTTP_BAD_REQUEST);
      }
    }
  },
  //** change the status of user */
  changeStatus: async (req, res) => {
    let id = req.query.id;
    if (!id) {
      const error = MESSAGES.apiErrorStrings.INVALID_REQUEST;
      return res
        .status(resCode.HTTP_BAD_REQUEST)
        .json(generateResponse(resCode.HTTP_BAD_REQUEST, error));
    }

    let query = {
      where: {
        id: id,
        status: [OPTIONS.defaultStatus.ACTIVE, OPTIONS.defaultStatus.INACTIVE],
      },
    };

    // let existingUser = await User.findOne(query);
    let existingUser = await userRepository.findOneByCondition(query);
    if (!existingUser) {
      const errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("User");
      // let errors = MESSAGES.apiErrorStrings.INVALID_CREDENTIALS;
      throw new ApiError(errors, resCode.HTTP_BAD_REQUEST);
    }
    existingUser.status =
      existingUser.status === OPTIONS.defaultStatus.ACTIVE
        ? OPTIONS.defaultStatus.INACTIVE
        : OPTIONS.defaultStatus.ACTIVE;
    // await existingUser.save();
    await userRepository.save(existingUser);

    res.status(resCode.HTTP_OK).json(
      generateResponse(resCode.HTTP_OK, {
        message: MESSAGES.apiSuccessStrings.STATUS_CHANGE(
          "User",
          existingUser.status
        ),
      })
    );
  },
  createAndUpdateUserDevice: async (req, res) => {
    try {
      var createObj = req.body;
      createObj.geoLocation = JSON.stringify(createObj.geoLocation);
      const foundItem = await userDevice.findOne({
        where: {
          userId: req.body.userId,
        },
      });

      if (!foundItem) {
        await userDevice.create(createObj);
        return res.status(resCode.HTTP_OK).json(
          generateResponse(resCode.HTTP_OK, {
            message: MESSAGES.apiSuccessStrings.ADDED(
              `The Device is Added Successfully`
            ),
          })
        );
      } else {
        await userDevice.update(createObj, {
          where: {
            userId: req.body.userId,
          },
        });
        return res.status(resCode.HTTP_OK).json(
          generateResponse(resCode.HTTP_OK, {
            message: MESSAGES.apiSuccessStrings.ADDED(`The Device is `),
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
  getAllBespoke: asyncHandler(async (req, res) => {
    const {
      page = 1,
      pageSize = 10,
      column = "createdAt",
      direction = "DESC",
    } = req.query;
    let offset = (page - 1) * pageSize || 0;
    let query = {
      include: [
        {
          model: Customer,
          as: "bespokeWithCustomer",
          attributes: ["firstName", "lastName", "email", "phone"],
        },
      ],
      order: [[column, direction]],
      offset: +offset,
      limit: +pageSize,
    };

    let response = await BespokeRepository.findAndCountAll(query);
    return res
      .status(resCode.HTTP_OK)
      .json(generateResponse(resCode.HTTP_OK, response));
  }),

  getBespokeById: asyncHandler(async (req, res) => {
    let query = {
      where: {
        id: req.params.id,
      },
      include: [
        {
          model: Customer,
          as: "bespokeWithCustomer",
          attributes: ["firstName", "lastName", "email", "phone"],
        },
        {
          model: BespokeImageMap,
          as: "bespokeImages",
          attributes:["image"]
        },
      ],
    };
    let existing = await BespokeRepository.findOneByCondition(query);
    if (!existing) {
      let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("Bespoke");
      throw new ApiError(errors, resCode.HTTP_BAD_REQUEST);
    }
    return res
      .status(resCode.HTTP_OK)
      .json(generateResponse(resCode.HTTP_OK, existing));
  }),
};
module.exports = userObj;
