const ProdTagMap = require("../../models/prodTagMap");

module.exports.findByPk = async (id) => {
    return await ProdTagMap.findByPk(id);
};

module.exports.findOneByCondition = async (condition) => {
   return await ProdTagMap.findOne(condition);
};

module.exports.findAndCountAll = async (query) => {
    return await ProdTagMap.findAndCountAll(query);
};

module.exports.findAll = async (query) => {
    return await ProdTagMap.findAll(query);
};


module.exports.save = async (data) => {
    return await data.save();
};

module.exports.delete = async (query) => {
   return await ProdTagMap.destroy(query);
};

module.exports.bulkCreate = async (data) => {
    return await ProdTagMap.bulkCreate(data);
};

module.exports.create = async (data) => {
    return await ProdTagMap.create(data);
};

module.exports.update = async (data, query) => {
    return await ProdTagMap.update(data, query);
};