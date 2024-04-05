const WishList = require("../../models").WishList;

module.exports.findByPk = async (id) => {
    return await WishList.findByPk(id);
};

module.exports.findOneByCondition = async (condition) => {
  return   await WishList.findOne(condition);
};

module.exports.findAndCountAll = async (query) => {
    return await WishList.findAndCountAll(query);
};

module.exports.findAll = async (query) => {
    return await WishList.findAll(query);
};


module.exports.save = async (data) => {
    return await WishList.save(data);
};

module.exports.delete = async (query) => {
   return  await WishList.destroy(query);
};

module.exports.bulkCreate = async (data) => {
    return await WishList.bulkCreate(data);
};

module.exports.create = async (data) => {
    return await WishList.create(data);
};

module.exports.update = async (data, query) => {
    //console.log('your update===',await WishList.update(data, query))
    return await WishList.update(data, query);
};