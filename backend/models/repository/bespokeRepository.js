const Bespoke = require("../../models").Bespoke;
const BespokeImageMap = require("../../models").BespokeImageMap;

module.exports.findByPk = async (id) => {
    return await Bespoke.findByPk(id);
};

module.exports.findOneByCondition = async (condition) => {
  return   await Bespoke.findOne(condition);
};

module.exports.findAndCountAll = async (query) => {
    return await Bespoke.findAndCountAll(query);
};

module.exports.findAll = async (query) => {
    return await Bespoke.findAll(query);
};


module.exports.save = async (data) => {
    return await data.save()
};

module.exports.delete = async (query) => {
   return  await Bespoke.destroy(query);
};

module.exports.bulkCreate = async (data) => {
    return await BespokeImageMap.bulkCreate(data);
};

module.exports.create = async (data) => {
    return await Bespoke.create(data);
};

module.exports.update = async (data, query) => {
    //console.log('your update===',await Bespoke.update(data, query))
    return await Bespoke.update(data, query);
};