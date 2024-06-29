const { asyncHandler } = require("../../../../config/middlewares/async.handler");
const { generateResponse } = require("../../../../config/options/global.options");
const MESSAGES = require("../../../../config/options/messages.options");
const { createPayment } = require("../../shared/Stripe")
const modelObj = {
    pay: asyncHandler(async (req, res) => {
        await createPayment(req.body);
        return res.status(resCode.HTTP_OK).json(
            generateResponse(resCode.HTTP_OK, {
              message: MESSAGES.apiSuccessStrings.ADDED("Order"),
            })
          );
    })
}
module.exports = modelObj;