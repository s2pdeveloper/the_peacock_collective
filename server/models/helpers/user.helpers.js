const _ = require('lodash');
const sequelize = require('sequelize');
const { OPTIONS } = require('../../config/options/global.options');
const bcrypt = require('bcrypt');
const User = require('..').Users;
const Op = sequelize.Op;
const { Entropy, charset16 } = require('entropy-string');

exports.userData = async (id) => {
  let query = {
    where: {
      id : id,
    },
  };
  let existingUser = await User.findOne(query);
  return {
    id: existingUser.id,
    email: existingUser.email,
    name: `${existingUser.firstName} ${existingUser.lastName}`,
    mobile:existingUser.mobile,
    role: existingUser.role,
  };
};