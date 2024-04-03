const Customer = require("..").Customer;

// Create and Save a new Tutorial
module.exports.findByPk = async (id) => {
    return await Customer.findByPk(id);
};

// Retrieve all Tutorials from the database.
module.exports.findOneByCondition = async (condition) => {
    await Customer.findOne(condition);
};

module.exports.findAndCountAll = async (query) => {
    return await Customer.findAndCountAll(query);
};

module.exports.findAll = async (query) => {
    return await Customer.findAll(query);
};


// Update a Tutorial by the id in the request
module.exports.save = async (data) => {
    return await Customer.save(data);
};

// Delete a Tutorial with the specified id in the request
module.exports.delete = async (query) => {
    await Customer.destroy(query);
};

// Delete all Tutorials from the database.
module.exports.bulkCreate = async (data) => {
    return await Customer.bulkCreate(data);
};

module.exports.create = async (data) => {
    return await Customer.create(data);
};

// Find all published Tutorials
module.exports.update = async (query) => {
    return await Customer.update(query);
};