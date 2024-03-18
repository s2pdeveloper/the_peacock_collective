const sequelize = require('sequelize');
const { validationResult } = require('express-validator');
const { schemaValidation } = require('../options/schemaValidate');
const Op = sequelize.Op;
const { OPTIONS, generateResponse } = require('../options/global.options');
const User = require('../../models').User;
const MESSAGES = require('../options/messages.options');
const { times } = require('lodash');

const resCode = MESSAGES.resCode;
let utilsObj = {
  rolePermit: (...permittedRoles) => {
    // return a middleware
    return (request, response, next) => {
      const { user } = request;
      if (user && permittedRoles.includes(user.role)) {
        next(); // role is allowed, so continue on the next middleware
      } else {
        return response
          .status(resCode.HTTP_BAD_REQUEST)
          .json(
            generateResponse(
              resCode.HTTP_BAD_REQUEST,
              MESSAGES.errorTypes.UNAUTHORISED_ACCESS
            )
          ); // user is forbidden
      }
    };
  },
  validate: (schemas) => {
    return async (req, res, next) => {
      await Promise.all(
        schemaValidation[schemas].map((schema) => schema.run(req))
      );
      const result = validationResult(req);
      if (result.isEmpty()) {
        return next();
      }
      const errors = result.array();
      if (!result.isEmpty()) {
        return res
          .status(resCode.HTTP_BAD_REQUEST)
          .json(
            generateResponse(
              resCode.HTTP_BAD_REQUEST,
              { errors: errors },
              MESSAGES.errorTypes.INPUT_VALIDATION
            )
          );
      }
    };
  },
  onStartServerDataInsert: () => {
    createSuperAdminUser();
  },
};
module.exports = utilsObj;

 const createSuperAdminUser = async () => {
  let userData = await User.findOne({
    where: { email: 'superadmin@gmail.com' },
    attributes: ['id'],
  });
  if (!userData) {
    await User.create(OPTIONS.superAdminData);
  }
}
