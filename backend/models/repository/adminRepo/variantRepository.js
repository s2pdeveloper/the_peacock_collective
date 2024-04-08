const Variant = require("../../../models/variant");

module.exports.findByPk = async (id) => {
    return await Variant.findByPk(id);
};

module.exports.findOneByCondition = async (condition) => {
   return await Variant.findOne(condition);
};

module.exports.findAndCountAll = async (query) => {
    return await Variant.findAndCountAll(query);
};

module.exports.findAll = async (query) => {
    return await Variant.findAll(query);
};


module.exports.save = async (data) => {
    return await data.save();
};

module.exports.delete = async (query) => {
   return await Variant.destroy(query);
};

module.exports.bulkCreate = async (data) => {
    return await Variant.bulkCreate(data);
};

module.exports.create = async (data) => {
    return await Variant.create(data);
};

module.exports.update = async (data, query) => {
    return await Variant.update(data, query);
};