const Customer = require("../../models").Customer;

module.exports.findByPk = async (id) => {
    return await Customer.findByPk(id);
};

module.exports.findOneByCondition = async (condition) => {
    await Customer.findOne(condition);
};

module.exports.findAndCountAll = async (query) => {
    return await Customer.findAndCountAll(query);
};

module.exports.findAll = async (query) => {
    return await Customer.findAll(query);
};


module.exports.save = async (data) => {
    return await Customer.save(data);
};

module.exports.delete = async (query) => {
    await Customer.destroy(query);
};

module.exports.bulkCreate = async (data) => {
    return await Customer.bulkCreate(data);
};

module.exports.create = async (data) => {
    return await Customer.create(data);
};

module.exports.update = async (query) => {
    return await Customer.update(query);
};