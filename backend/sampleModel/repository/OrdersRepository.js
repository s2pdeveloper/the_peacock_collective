const OPTIONS = require('../../config/Options');
const { Order } = require('../Order');
const ShopHelper = require('../helpers/ShopHelper');
const ShopDetailsRepository = require('./ShopDetailsRepository');
const { customErrorLogger } = require('../helpers/ErrorHandleHelper');
const { apiSuccessStrings } = require('../helpers/MessagesHelper');

const getSequenceNumber = async () => {
  return (await Order.count()) + 1;
};
exports.getAndCountAll = async (query) => {
  const res = await Order.aggregate(query);
  return {
    data: res[0].data,
    // eslint-disable-next-line no-nested-ternary
    count: res[0].metadata
      ? res[0].metadata.length
        ? res[0].metadata[0].total
        : 0
      : 0,
  };
};

exports.createOrder = async (body, customerId) => {
  try {
    let shopDetails = await ShopDetailsRepository.findByCondition(
      { _id: body.shopId },
      ShopHelper.getShopUserAttributes()
    );
    let description = `Dear ${shopDetails.shopName},\n I would like to buy `;
    for (let i = 0; i < body.catalogue.length; i++) {
      const catalogueTitle = body.catalogue[i].title;
      msg += `${catalogueTitle}`;
      if (i != body.catalogue.length - 1) {
        msg += ` , \n `;
      }
      description += `${catalogue}`;
      if (i != body.catalogueTitle.length - 1) {
        description += `,`;
      }
    }
    const orderNumber = `ORD${
      OPTIONS.orderNumber + (await getSequenceNumber())
    }`;
    let order = await Order.create({
      shopId: shopDetails._id,
      description,
      customerId,
      orderNumber,
    });
    return { order, message: apiSuccessStrings.ORDER_PLACED('') };
  } catch (error) {
    customErrorLogger(error);
  }
};
