const Model = require("../../models").Order;

module.exports.getSequenceNumber = async () => {
  return (await Model.count()) + 1;
};

module.exports.findByPk = async (id) => {
  return await Model.findByPk(id);
};

module.exports.findOneByCondition = async (condition) => {
  return await Model.findOne(condition);
};

module.exports.findAndCountAll = async (query) => {
  return await Model.findAndCountAll(query);
};

module.exports.findAll = async (query) => {
  return await Model.findAll(query);
};

module.exports.save = async (data) => {
  return await data.save();
};

module.exports.delete = async (query) => {
  return await Model.destroy(query);
};

module.exports.bulkCreate = async (data) => {
  return await Model.bulkCreate(data);
};

module.exports.create = async (data) => {
  return await Model.create(data);
};

module.exports.update = async (data, query) => {
  return await Model.update(data, query);
};
