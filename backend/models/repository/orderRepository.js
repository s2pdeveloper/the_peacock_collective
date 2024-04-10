const Order = require("../../models/order");

module.exports.findByPk = async (id) => {
    return await Order.findByPk(id);
};

module.exports.findOneByCondition = async (condition) => {
  
   return await Order.findOne(condition);
};

module.exports.findAndCountAll = async (query) => {
    return await Order.findAndCountAll(query);
};

module.exports.findAll = async (query) => {
    return await Order.findAll(query);
};


module.exports.save = async (data) => {
    return await data.save();
};

module.exports.delete = async (query) => {
   return await Order.destroy(query);
};

module.exports.bulkCreate = async (data) => {
    return await Order.bulkCreate(data);
};

module.exports.create = async (data) => {
    return await Order.create(data);
};

module.exports.update = async (data, query) => {
    return await Order.update(data, query);
};