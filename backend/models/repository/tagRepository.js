const Tag = require("../../models/tag");

module.exports.findByPk = async (id) => {
    return await Tag.findByPk(id);
};

module.exports.findOneByCondition = async (condition) => {
   return await Tag.findOne(condition);
};

module.exports.findAndCountAll = async (query) => {
    return await Tag.findAndCountAll(query);
};

module.exports.findAll = async (query) => {
    return await Tag.findAll(query);
};

module.exports.save = async (data) => {
    return await data.save();
};

module.exports.delete = async (query) => {
   return await Tag.destroy(query);
};

module.exports.bulkCreate = async (data) => {
    return await Tag.bulkCreate(data);
};

module.exports.create = async (data) => {
    return await Tag.create(data);
};

module.exports.update = async (data, query) => {
    return await Tag.update(data, query);
};