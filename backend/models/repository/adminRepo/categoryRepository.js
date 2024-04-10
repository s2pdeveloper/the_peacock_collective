const Category = require("../../../models/Categories");

module.exports.findByPk = async (id) => {
    return await Category.findByPk(id);
};

module.exports.findOneByCondition = async (condition) => {
   return await Category.findOne(condition);
};

module.exports.findAndCountAll = async (query) => {
    return await Category.findAndCountAll(query);
};

module.exports.findAll = async (query) => {
    return await Category.findAll(query);
};


module.exports.save = async (data) => {
    return await data.save();
};

module.exports.delete = async (query) => {
   return await Category.destroy(query);
};

module.exports.bulkCreate = async (data) => {
    return await Category.bulkCreate(data);
};

module.exports.create = async (data) => {
    return await Category.create(data);
};

module.exports.update = async (data, query) => {
    return await Category.update(data, query);
};