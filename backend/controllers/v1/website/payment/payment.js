const { asyncHandler } = require("../../../../config/middlewares/async.handler");
const { generateResponse } = require("../../../../config/options/global.options");
const MESSAGES = require("../../../../config/options/messages.options");
const { createPayment } = require("../../shared/Stripe");
const customerRepository = require("../../../../models/repository/CustomerRepository")
const modelObj = {
    pay: asyncHandler(async (req, res) => {
      let customerId = req.user.id
      let user = await customerRepository.findByPk(customerId);
      let data =  await createPayment({...req.body,customerId},user);
        return res.status(MESSAGES.resCode.HTTP_OK).json(
            generateResponse(MESSAGES.resCode.HTTP_OK, {
              message: MESSAGES.apiSuccessStrings.ADDED("Payment"),
              data : data
            })
          );
    })
}
module.exports = modelObj;