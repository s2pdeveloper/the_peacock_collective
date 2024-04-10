const Contact = require("../../models/contact");

module.exports.findByPk = async (id) => {
    return await Contact.findByPk(id);
};

module.exports.findOneByCondition = async (condition) => {
   return await Contact.findOne(condition);
};

module.exports.findAndCountAll = async (query) => {
    return await Contact.findAndCountAll(query);
};

module.exports.findAll = async (query) => {
    return await Contact.findAll(query);
};


module.exports.save = async (data) => {
    return await data.save();
};

module.exports.delete = async (query) => {
   return await Contact.destroy(query);
};

module.exports.bulkCreate = async (data) => {
    return await Contact.bulkCreate(data);
};

module.exports.create = async (data) => {
    return await Contact.create(data);
};

module.exports.update = async (data, query) => {
    return await Contact.update(data, query);
};