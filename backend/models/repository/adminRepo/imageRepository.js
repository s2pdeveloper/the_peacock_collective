const Image = require("../../../models/image");

module.exports.findByPk = async (id) => {
    return await Image.findByPk(id);
};

module.exports.findOneByCondition = async (condition) => {
   return await Image.findOne(condition);
};

module.exports.findAndCountAll = async (query) => {
    return await Image.findAndCountAll(query);
};

module.exports.findAll = async (query) => {
    return await Image.findAll(query);
};


module.exports.save = async (data) => {
    return await data.save();
};

module.exports.delete = async (query) => {
   return await Image.destroy(query);
};

module.exports.bulkCreate = async (data) => {
    return await Image.bulkCreate(data);
};

module.exports.create = async (data) => {
    return await Image.create(data);
};

module.exports.update = async (data, query) => {
    return await Image.update(data, query);
};