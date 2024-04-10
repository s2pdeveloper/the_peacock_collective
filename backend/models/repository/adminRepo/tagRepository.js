const tag = require("../../../models/tag");

module.exports.findByPk = async (id) => {
    return await tag.findByPk(id);
};

module.exports.findOneByCondition = async (condition) => {
   return await tag.findOne(condition);
};

module.exports.findAndCountAll = async (query) => {
    return await tag.findAndCountAll(query);
};

module.exports.findAll = async (query) => {
    return await tag.findAll(query);
};


module.exports.save = async (data) => {
    return await data.save();
};

module.exports.delete = async (query) => {
   return await tag.destroy(query);
};

module.exports.bulkCreate = async (data) => {
    return await tag.bulkCreate(data);
};

module.exports.create = async (data) => {
    return await tag.create(data);
};

module.exports.update = async (data, query) => {
    return await tag.update(data, query);
};