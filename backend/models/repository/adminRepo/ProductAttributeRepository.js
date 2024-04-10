const prodAttributeMap = require("../../../models/prodAttributeMap");

module.exports.findByPk = async (id) => {
    return await prodAttributeMap.findByPk(id);
};

module.exports.findOneByCondition = async (condition) => {
   return await prodAttributeMap.findOne(condition);
};

module.exports.findAndCountAll = async (query) => {
    return await prodAttributeMap.findAndCountAll(query);
};

module.exports.findAll = async (query) => {
    return await prodAttributeMap.findAll(query);
};


module.exports.save = async (data) => {
    return await data.save();
};

module.exports.delete = async (query) => {
   return await prodAttributeMap.destroy(query);
};

module.exports.bulkCreate = async (data) => {
    return await prodAttributeMap.bulkCreate(data);
};

module.exports.create = async (data) => {
    return await prodAttributeMap.create(data);
};

module.exports.update = async (data, query) => {
    return await prodAttributeMap.update(data, query);
};