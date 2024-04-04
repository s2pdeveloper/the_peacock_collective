const Cart = require("../../models").Cart;

module.exports.findByPk = async (id) => {
    return await Cart.findByPk(id);
};

module.exports.findOneByCondition = async (condition) => {
  return   await Cart.findOne(condition);
};

module.exports.findAndCountAll = async (query) => {
    return await Cart.findAndCountAll(query);
};

module.exports.findAll = async (query) => {
    return await Cart.findAll(query);
};


module.exports.save = async (data) => {
    return await Cart.save(data);
};

module.exports.delete = async (query) => {
   return  await Cart.destroy(query);
};

module.exports.bulkCreate = async (data) => {
    return await Cart.bulkCreate(data);
};

module.exports.create = async (data) => {
    return await Cart.create(data);
};

module.exports.update = async (data, query) => {
    //console.log('your update===',await Cart.update(data, query))
    return await Cart.update(data, query);
};