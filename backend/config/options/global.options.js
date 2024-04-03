const _ = require("lodash");
const pug = require("pug");

const OPTIONS = {
  appVersion: "1.0.0",
  appSchemaUrl: "project_name",
  timeZone: "Asia/Kolkata",
  emailSenderName: "email sender",
  randomUsernameSize: 4,
  randomShopSize: 4,
  resetPasswordExpireInDays: 720,
  defaultTax: 2,
  otpExpireInDays: 1,
  elasticSearchIndexes: {
    PRODUCT: "product",
  },
  elasticSearchIndexModalNames: {
    PRODUCT: "Product",
  },
  usersRoles: {
    SUPER_ADMIN: "SUPER_ADMIN",
    EMPLOYEE: "EMPLOYEE",
    CUSTOMER: "CUSTOMER",
    getAllRolesAsArray: () => {
      return [
        OPTIONS.usersRoles.SUPER_ADMIN,
        OPTIONS.usersRoles.EMPLOYEE,
        OPTIONS.usersRoles.CUSTOMER,
      ];
    },
    getAllRolesByAPAsArray: () => {
      return [OPTIONS.usersRoles.SUPER_ADMIN, OPTIONS.usersRoles.EMPLOYEE];
    },
  },
  genders: {
    MALE: "Male",
    FEMALE: "Female",
    TRANSGENDER: "Transgender",
  },
  planTypes: {
    BASIC: "Basic",
    STANDARD: "Standard",
    PREMIUM: "Premium",
    getAllAsArray: () => {
      return [
        OPTIONS.planTypes.BASIC,
        OPTIONS.planTypes.STANDARD,
        OPTIONS.planTypes.PREMIUM,
      ];
    },
  },
  subscriptionTypes: {
    YEARS: "Years",
    MONTHS: "Months",
    DAYS: "Days",
    getAllAsArray: () => {
      return [
        OPTIONS.subscriptionTypes.YEARS,
        OPTIONS.subscriptionTypes.MONTHS,
        OPTIONS.subscriptionTypes.DAYS,
      ];
    },
  },
  defaultStatus: {
    ACTIVE: "active",
    INACTIVE: "inactive",
    UNAPPROVED: "unapproved",
    APPROVED: "approved",
    DISPATACHED:"dispatched",
    DELIVERED:"delivered",
    CANCEL:"cancel",
    REJECTED: "rejected",
    DELETED: "deleted",
    OPEN: "open",
    CLOSE: "close",
  },
  paymentModes: {
    CREDIT: "credit",
    CASH: "cash",
    CARD: "card",
  },
  addressType: {
    HOME: "home",
    WORK: "work",
    OTHERS: "others",
  },
  devicePlatforms: {
    ANDROID: "android",
    IOS: "ios",
    WEB: "web",
  },
  emailSubjects: {
    ACCOUNT_WELCOME: "Welcome mail",
    ACCOUNT_VERIFY: "Verification OTP",
    ACCOUNT_ACTIVATE: "Activate your account",
  },
  notificationMode: {
    NOTIFICATION_TRIGGER_ALL: "notification_trigger_all",
    NOTIFICATION_TRIGGER_EMAIL: "notification_trigger_email",
    NOTIFICATION_TRIGGER_IN_APP: "notification_trigger_in_app",
  },
  subjectType: {
    THEORY: "Theory",
    PRACTICAL: "Practical",
  },
  imageType: {
    SLIDER: "Slider",
  },
  paymentType: {
    CREDIT: "CREDIT",
    ADVANCE: "ADVANCE",
    DEPOSIT: "DEPOSIT",
  },

  userPreferences: {
    mobileNumber: {
      name: "MOBILE_NUMBER",
      title: "Mobile Number",
      description: "Are you sure you want to show Mobile Number",
    },
    profilePicture: {
      name: "PROFILE_PICTURE",
      title: "Profile Picture",
      description: "Are you sure you want to show profile picture",
    },
    email: {
      name: "EMAIL",
      title: "Email",
      description: "Are you sure you want to show your email",
    },
    getAsArray: () => {
      return [
        options.userPreferences.mobileNumber,
        options.userPreferences.profilePicture,
        options.userPreferences.email,
      ];
    },
  },

  superAdminData: {
    userName: "Super Admin",
    name: "Super Admin",
    role: "SUPER_ADMIN",
    email: "superadmin@gmail.com",
    mobile: "1111111111",
    isEmailVerified: "1",
    isMobileNumberVerified: "0",
    password: "$2b$08$onZXvgydrbJ03PCB7jmybujbHEUL9tY1vZQf7aCAZDr2s.mzkaLH6",
    status: "active",
    createdAt: "2022-07-04 05:04:36",
    updatedAt: "2022-07-04 05:04:36",
  },
};
const generateCreateData = async (createObj, requestBody) => {
  for (let i = Object.keys(requestBody).length - 1; i >= 0; i--) {
    let key = Object.keys(requestBody)[i];
    if (requestBody[key] === "null") {
      createObj[key] = null;
    } else {
      createObj[key] = requestBody[key];
    }
  }
  return createObj;
};
const generateURl = (filePath) => {
  return filePath ? process.env.CLOUDINARY_PATH + filePath : null;
};
const generateOTP = (length) => {
  if (process.env.ENVIRONMENT === "development") {
    //TODO remove after sms integration
    return length > 4 ? 4444 : 4444;
  }
  return length > 4
    ? Math.floor(10000 + Math.random() * 90000)
    : Math.floor(1000 + Math.random() * 9000);
};
const generateResponse = (code, payload, type, noWrapPayload) => {
  noWrapPayload = noWrapPayload || false;
  type = type || "unknown";

  if (code && code >= 300) {
    payload = _.isArray(payload) ? payload : [payload];
    let plain_text_errors =
      payload.length > 0 && _.isString(payload[0]) ? payload : [];
    let object_errors =
      payload.length > 0 && _.isObject(payload[0]) ? payload : [];
    let output = {
      error: {
        errors: plain_text_errors,
        error_params: object_errors,
        code: code,
        type: type,
      },
    };
    return output;
  } else {
    // success data
    if (payload && !noWrapPayload) {
      return { result: payload };
    } else if (payload) {
      return payload;
    } else {
      return undefined;
    }
  }
};
const genAbsoluteUrl = (path, type, opt) => {
  switch (type) {
    case "admin":
      return (
        process.env.CLIENT_REQUEST_PROTOCOL +
        "://" +
        process.env.ADMIN_HOST +
        path
      );
    default:
      return (
        process.env.CLIENT_REQUEST_PROTOCOL +
        "://" +
        process.env.CUSTOMER_HOST +
        path
      );
  }
};
const generateHtml = (template, data) => {
  return pug.renderFile(
    __dirname + "/../../public/email_templates/" + template + ".pug",
    data
  );
};
module.exports = {
  OPTIONS,
  generateURl,
  generateOTP,
  genAbsoluteUrl,
  generateResponse,
  generateHtml,
  generateCreateData,
};
