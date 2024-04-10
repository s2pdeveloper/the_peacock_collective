const Address = require("../../models/address");

module.exports.findByPk = async (id) => {
    return await Address.findByPk(id);
};

module.exports.findOneByCondition = async (condition) => {
    console.log("your condition",condition);
   return await Address.findOne(condition);
};

module.exports.findAndCountAll = async (query) => {
    return await Address.findAndCountAll(query);
};

module.exports.findAll = async (query) => {
    return await Address.findAll(query);
};

module.exports.save = async (data) => {
    return await data.save();
};

module.exports.delete = async (query) => {
   return await Address.destroy(query);
};

module.exports.bulkCreate = async (data) => {
    return await Address.bulkCreate(data);
};

module.exports.create = async (data) => {
    return await Address.create(data);
};

module.exports.update = async (data, query) => {
    return await Address.update(data, query);
};