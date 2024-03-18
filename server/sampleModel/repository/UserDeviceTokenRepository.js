const { UserDeviceToken } = require('../UserDeviceToken');

exports.setToken = async (id, body) => {
  let existingToken = await UserDeviceToken.findOne({
    token: body.deviceToken,
    platform: body.platform,
    userId: id,
  });
  if (!existingToken) {
    await UserDeviceToken.create({
      token: body.deviceToken,
      platform: body.platform,
      userId: id,
    });
  } else {
    existingToken.token = body.deviceToken;
    await existingToken.save();
  }
};
exports.clearToken = async (id, body) => {
  await UserDeviceToken.deleteOne({
    token: body.deviceToken,
    platform: body.platform,
    userId: id,
  });
};
