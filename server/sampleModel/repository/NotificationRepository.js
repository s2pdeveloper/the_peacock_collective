const Notification = require('../Notification');
const { UserDeviceToken } = require('../UserDeviceToken');

const TriggerNotification = require('../helpers/NotificationHelper');

exports.createNotification = async (data) => {
  try {
    let notification = {
      receiverId: data.receiverId,
      senderId: data.senderId,
      message: data.message,
      title: data.title,
      type: data.type,
      isSystemGenerated: data.isSystemGenerated,
    };

    let result = await Notification.create(notification);
    let deviceToken = await UserDeviceToken.find({
      $or: [
        { shopId: notification.receiverId },
        { customerId: notification.receiverId },
      ],
    });
    let ids = deviceToken.map((x) => x.token);
    if (ids && ids.length > 0) {
      await TriggerNotification.triggerFCM(ids, data);
    }
  } catch (e) {
    const errors = 'Oops! something went wrong.';
    throw new Error(e);
  }
};

exports.triggerNotification = async (receiverIds, data) => {
  try {
    let deviceToken = await UserDeviceToken.findAll({
      $or: [
        { shopId: notification.receiverId },
        { customerId: notification.receiverId },
      ],
    });
    let ids = deviceToken.map((x) => x.token);
    if (ids && ids.length > 0) {
      await TriggerNotification.triggerFCM(ids, data);
    }
  } catch (e) {
    const errors = 'Oops! something went wrong.';
    throw new Error(e);
  }
};
