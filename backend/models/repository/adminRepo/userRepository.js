const user = require("../../../models/user");

module.exports.findByPk = async (id) => {
    return await user.findByPk(id);
};

module.exports.findOneByCondition = async (condition) => {
   return await user.findOne(condition);
};

module.exports.findAndCountAll = async (query) => {
    return await user.findAndCountAll(query);
};

module.exports.findAll = async (query) => {
    return await user.findAll(query);
};


module.exports.save = async (data) => {
    return await data.save();
};

module.exports.delete = async (query) => {
   return await user.destroy(query);
};

module.exports.bulkCreate = async (data) => {
    return await user.bulkCreate(data);
};

module.exports.create = async (data) => {
    return await user.create(data);
};

module.exports.update = async (data, query) => {
    return await user.update(data, query);
};