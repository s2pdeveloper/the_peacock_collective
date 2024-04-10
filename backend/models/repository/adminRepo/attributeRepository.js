const Attribute = require("../../../models/Attribute");

module.exports.findByPk = async (id) => {
    return await Attribute.findByPk(id);
};

module.exports.findOneByCondition = async (condition) => {
   return await Attribute.findOne(condition);
};

module.exports.findAndCountAll = async (query) => {
    return await Attribute.findAndCountAll(query);
};

module.exports.findAll = async (query) => {
    return await Attribute.findAll(query);
};


module.exports.save = async (data) => {
    return await data.save();
};

module.exports.delete = async (query) => {
   return await Attribute.destroy(query);
};

module.exports.bulkCreate = async (data) => {
    return await Attribute.bulkCreate(data);
};

module.exports.create = async (data) => {
    return await Attribute.create(data);
};

module.exports.update = async (data, query) => {
    return await Attribute.update(data, query);
};