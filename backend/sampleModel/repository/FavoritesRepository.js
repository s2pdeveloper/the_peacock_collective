const { apiSuccessStrings } = require('../helpers/MessagesHelper');
const { Favorite } = require('../Favorites');

exports.createAnUpdate = async (body, loggedInUser) => {
  try {
    let message = apiSuccessStrings.ADDED('Shop');
    let favorite = await Favorite.findOne({
      shopId: body.shopId,
      customerId: loggedInUser,
    });
    if (favorite) {
      await Favorite.remove({
        shopId: body.shopId,
        customerId: loggedInUser,
      });
      message = apiSuccessStrings.REMOVE('Shop');
    } else {
      favorite = await Favorite.create({
        shopId: body.shopId,
        customerId: loggedInUser,
      });
    }
    return {
      message,
      data: favorite,
    };
  } catch (error) {
    console.log(error);
  }
};
