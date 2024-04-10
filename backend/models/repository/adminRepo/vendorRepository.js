const Vendor = require("../../../models/vendor");

module.exports.findByPk = async (id) => {
    return await Vendor.findByPk(id);
};

module.exports.findOneByCondition = async (condition) => {
   return await Vendor.findOne(condition);
};

module.exports.findAndCountAll = async (query) => {
    return await Vendor.findAndCountAll(query);
};

module.exports.findAll = async (query) => {
    return await Vendor.findAll(query);
};


module.exports.save = async (data) => {
    return await data.save();
};

module.exports.delete = async (query) => {
   return await Vendor.destroy(query);
};

module.exports.bulkCreate = async (data) => {
    return await Vendor.bulkCreate(data);
};

module.exports.create = async (data) => {
    return await Vendor.create(data);
};

module.exports.update = async (data, query) => {
    return await Vendor.update(data, query);
};