const { ShopDetails } = require('../ShopDetails');

exports.createShopDetails = async (body) => await ShopDetails.create(body);

exports.updateShopDetails = async (id, body) =>
 await ShopDetails.findByIdAndUpdate(id, body);

exports.findByCondition = async (conditions, options) =>
  await ShopDetails.findOne(conditions, options);