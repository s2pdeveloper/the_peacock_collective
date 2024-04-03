const User = require("../../models").User;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
module.exports.findByPk = async (id) => {
    return await User.findByPk(id);
};

// Retrieve all Tutorials from the database.
exports.findOneByCondition = async (condition) => {
    await User.findOne(condition);
};

exports.findAndCountAll = async (query) => {
    return await Project.findAndCountAll(query);
};

exports.findAll = async (query) => {
    return await Project.findAll(query);
};


// Update a Tutorial by the id in the request
exports.update = (req, res) => {

};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {

};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {

};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {

};