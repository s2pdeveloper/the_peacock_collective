const AttrVariantMap = require("../../../models/AttrVariantMap");
// const Attribute = require("../../../models/Attribute");

module.exports.findByPk = async (id) => {
    return await AttrVariantMap.findByPk(id);
};

module.exports.findOneByCondition = async (condition) => {
   return await AttrVariantMap.findOne(condition);
};

module.exports.findAndCountAll = async (query) => {
    return await AttrVariantMap.findAndCountAll(query);
};

module.exports.findAll = async (query) => {
    return await AttrVariantMap.findAll(query);
};


module.exports.save = async (data) => {
    return await data.save();
};

module.exports.delete = async (query) => {
   return await AttrVariantMap.destroy(query);
};

module.exports.bulkCreate = async (data) => {
    return await AttrVariantMap.bulkCreate(data);
};

module.exports.create = async (data) => {
    return await AttrVariantMap.create(data);
};

module.exports.update = async (data, query) => {
    return await AttrVariantMap.update(data, query);
};