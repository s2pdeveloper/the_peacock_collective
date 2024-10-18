const sequelize = require('sequelize');
const fs = require('fs');
const {
  OPTIONS,
  generateResponse,
  generateCreateData,
} = require('../../../../config/options/global.options');
const MESSAGES = require('../../../../config/options/messages.options');
const CustomerRepository = require('../../../../models/repository/CustomerRepository');
const { asyncHandler } = require('../../../../config/middlewares/async.handler');
const User = require('../../../../models').User;
const Customer = require('../../../../models').Customer;
// const CustomerRepository = require('../../../../models/repository/CustomerRepository');
const resCode = MESSAGES.resCode;
const Op = sequelize.Op;


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
};

module.exports = modelObj;
