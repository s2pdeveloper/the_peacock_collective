const User = require("../../models/user");

module.exports.findByPk = async (id) => {
    return await User.findByPk(id);
};

module.exports.findOneByCondition = async (condition) => {
    return User.findOne(condition);
};

module.exports.findAndCountAll = async (query) => {
    return await User.findAndCountAll(query);
};

module.exports.findAll = async (query) => {
    return await User.findAll(query);
};


module.exports.save = async (data) => {
   return  await data.save();
};

module.exports.delete = async (query) => {
  return  await User.destroy(query);
};

module.exports.bulkCreate = async (data) => {
    return await User.bulkCreate(data);
};

module.exports.create = async (data) => {
    return await User.create(data);
};

module.exports.update = async (data, query) => {
    return await User.update(data, query);
};