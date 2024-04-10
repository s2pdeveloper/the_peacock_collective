const product = require("../../../models/product");

module.exports.findByPk = async (id) => {
    return await product.findByPk(id);
};

module.exports.findOneByCondition = async (condition) => {
   return await product.findOne(condition);
};

module.exports.findAndCountAll = async (query) => {
    return await product.findAndCountAll(query);
};

module.exports.findAll = async (query) => {
    return await product.findAll(query);
};


module.exports.save = async (data) => {
    return await data.save();
};

module.exports.delete = async (query) => {
   return await product.destroy(query);
};

module.exports.bulkCreate = async (data) => {
    return await product.bulkCreate(data);
};

module.exports.create = async (data) => {
    return await product.create(data);
};

module.exports.update = async (data, query) => {
    return await product.update(data, query);
};