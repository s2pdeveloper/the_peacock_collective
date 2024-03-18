const mongoose = require('mongoose');
const { User } = require('../User');
const {
  emailSubjects,
  defaultStatus,
  usersRoles,
} = require('../../config/Options');
const {
  apiErrorStrings,
  apiSuccessStrings,
} = require('../helpers/MessagesHelper');
const ShopDetailsRepository = require('../repository/ShopDetailsRepository');
const { getShopUserAttributes } = require('../helpers/ShopHelper');
const SMSRepository = require('../repository/SMSRepository');
const OPTIONS = require('../../config/Options');
const { log } = require('handlebars');

exports.getAndCountAll = async (query) => {
  const res = await User.aggregate(query);
  return {
    data: res[0].data,
    count: res[0].metadata
      ? res[0].metadata.length
        ? res[0].metadata[0].total
        : 0
      : 0,
  };
};

exports.findUserByCondition = async (conditions, options) =>
  await User.findOne(conditions, options);

exports.findAll = async (conditions, options) =>
  await User.find(conditions, options);

exports.findUserWithShopByCondition = async (conditions, options) =>
  await User.findOne(conditions, options)
    .populate({
      path: 'shopDetailsId',
      model: 'ShopDetails',
      select: getShopUserAttributes({
        businessTypeId: 1,
        bannerImages: {
          $concat: [`${process.env.CDN_WEB_STATIC}/`, '$bannerImages'],
        },
      }),
      populate: {
        path: 'businessTypeId',
        model: 'BusinessType',
        select: ['_id', 'name'],
      },
      populate: {
        path: 'subCategoryId',
        model: 'Category',
        select: ['_id', 'name'],
      },
    })
    .lean();

exports.patchStatus = async (existingData, status) => {
  if (status === defaultStatus.DELETED) {
    existingData.status = defaultStatus.DELETED;
    await existingData.save();
    return {
      message: apiSuccessStrings.DELETED('User'),
    };
  } else {
    existingData.status = status;
    await existingData.save();
  }
  return {
    message: apiSuccessStrings.STATUS_CHANGE('User'),
  };
};

exports.findUserById = async (id) => await User.findById(id);

const createUser = async (payload) =>
  await User.create({
    firstName: payload.firstName,
    lastName: payload.lastName,
    email: payload.email,
    phone: payload.phone,
    role: payload.role,
    userName: payload.userName,
    gender: payload.gender,
    profilePicture: payload.profilePicture,
    ...(payload.password && { password: payload.password || null }),
  });
const updateUser = async (existingData, payload) => {
  existingData.firstName = payload.firstName;
  existingData.lastName = payload.lastName;
  existingData.address = payload.address;
  existingData.profilePicture = payload.profilePicture;
  return await existingData.save();
};
exports.updateUser = updateUser;
exports.checkAndCreate = async (body, isAdminGenerated = true) => {
  const query = {
    status: { $ne: defaultStatus.DELETED },
    email: body.email,
    // role: body.role,
  };
  let existingUser = await this.findUserByCondition(query, {});
  if (existingUser) {
    return {
      success: false,
      message: apiErrorStrings.Data_EXISTS('Account'),
    };
  }

  existingUser = await createUser(body);
  if (!isAdminGenerated) {
    await this.generateAndSendOtp(existingUser);
  }
  return {
    success: true,
    message: apiSuccessStrings.SIGNUP_SUCCESS,
    data: existingUser,
  };
};

exports.checkAndUpdate = async (id, body) => {
  const query = {
    status: { $ne: defaultStatus.DELETED },
    _id: new mongoose.Types.ObjectId(id),
  };
  let existingUser = await this.findUserByCondition(query);
  if (!existingUser) {
    return {
      success: false,
      message: apiErrorStrings.Data_EXISTS('Account'),
    };
  }
  existingUser = await updateUser(existingUser, body);
  // existingUser = await ShopDetailsRepository.updateShopDetails(
  //   existingUser.shopDetailsId, body.shopDetails
  // );
  return {
    success: true,
    message: apiSuccessStrings.UPDATE('Profile'),
    data: existingUser,
  };
};

exports.patchUserStatus = async (existingData, status) => {
  if (status === defaultStatus.DELETED) {
    existingData.status = defaultStatus.DELETED;
    existingData.countryCode = `${existingData.countryCode}${Date.now()}'${
      defaultStatus.DELETED
    }'`;
    existingData.mobileNumber = `${existingData.mobileNumber}${Date.now()}'${
      defaultStatus.DELETED
    }'`;
    existingData.email = `${existingData.email}${Date.now()}'${
      defaultStatus.DELETED
    }'`;
    await existingData.save();
    return {
      message: apiSuccessStrings.DELETED('User'),
    };
  } else {
    existingData.status = status;
    await existingData.save();
  }
  return {
    message: apiSuccessStrings.STATUS_CHANGE('User'),
  };
};

exports.generateAndSendOtp = async (existingUser, isEmail = false) => {
  const todayDate = new Date();
  const tempOtp = OPTIONS.generateOtp();
  todayDate.setDate(todayDate.getDate() + OPTIONS.otpExpireInDays);
  existingUser.tempOtp = tempOtp;
  console.log(' existingUser.tempOtp......', existingUser.tempOtp);
  existingUser.tempOtpExpiresAt = todayDate;
  await existingUser.save();
  if (!isEmail) {
    const payload = {
      firstName: existingUser.firstName,
      lastName: existingUser.lastName,
      countryCode: existingUser.countryCode,
      mobileNumber: existingUser.mobileNumber,
    };
    SMSRepository.sendOTPMessage(payload, tempOtp).then();
  } else {
    // const payload = {
    //   id: existingUser.id,
    //   firstName: existingUser.firstName,
    //   lastName: existingUser.lastName,
    //   email: existingUser.email,
    //   tempOtp,
    // };
    // EmailHelper.sendOtpEmail(payload);
  }
};
exports.checkAndVerifyOtp = async (existingUser, isEmail = false) => {
  existingUser.tempOtp = null;
  existingUser.lastSignInAt = new Date();
  existingUser.tempOtpExpiresAt = null;
  if (isEmail) {
    existingUser.isEmailVerified = true;
  } else {
    existingUser.isMobileNumberVerified = true;
  }
  return await existingUser.save();
};
exports.updateOnlineStatus = async (userId, status) => {
  const user = await User.findOne({ _id: new mongoose.Types.ObjectId(userId) });
  user.onlineStatus = status;
  await user.save();
};
