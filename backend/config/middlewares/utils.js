const sequelize = require('sequelize');
const { validationResult } = require('express-validator');
const { schemaValidation } = require('../options/schemaValidate');
const Op = sequelize.Op;
const { OPTIONS, generateResponse } = require('../options/global.options');
const User = require('../../models').User;
const UserRepository = require('../../models/repository/UserRepository');
const MESSAGES = require('../options/messages.options');


module.exports.createSuperAdmin = async () => {
  let userData = await UserRepository.findOneByCondition({
    where: { email: 'superadmin@gmail.com' },
    attributes: ['id'],
  });
  console.log("userData======", userData);
  if (!userData) {
    console.log('if superadmin created');
    await UserRepository.create(OPTIONS.superAdminData);
  }
  console.log('superadmin created');

}

module.exports.rolePermit = (...permittedRoles) => {
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

}
module.exports.validate = (schemas) => {
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
}



