const { UserSubscription } = require("..");
const sequelize = require("sequelize");
const { OPTIONS } = require("../../config/options/global.options");
const TimeHelper = require("../../shared/utils/moment-timezone/time");
// const NotificationSubscription = require("./notification-subscription.helpers");
const Op = sequelize.Op;

exports.checkRunningPlan = async (userId) => {
  return await UserSubscription.findOne({
    where: {
      userId,
      status: OPTIONS.defaultStatus.ACTIVE,
    },
    logging: console.log,
  });
};

exports.unSubscribePlan = async () => {
  try {
    let subscription = await UserSubscription.findAll({
      where: {
        status: OPTIONS.defaultStatus.ACTIVE,
        [Op.and]: [
          sequelize.where(
            sequelize.fn("date", sequelize.col("Subscription.validTill")),
            "<",
            TimeHelper.getDateTime()
          ),
        ],
      },
      attributes: ["id", "userId"],
      logging: console.log,
    });
    if (subscription && subscription.length > 0) {
      await UserSubscription.update(
        { status: OPTIONS.defaultStatus.EXPIRED },
        { where: { id: subscription.map((e) => e.id) } }
      );
      // NotificationSubscription.sendNotificationExpired(subscription.map(e => e.userId)).then();
    }
  } catch (error) {
    customErrorLogger(error);
  }
};

exports.planExpiryInDays = async (day) => {
  try {
    let subscription = await UserSubscription.findAll({
      where: {
        status: OPTIONS.defaultStatus.ACTIVE,
        [Op.and]: [
          sequelize.where(
            sequelize.fn("date", sequelize.col("Subscription.validTill")),
            "=",
            day > 0
              ? TimeHelper.addToCurrentDate(day, "d")
              : TimeHelper.getDateTime()
          ),
        ],
      },
      attributes: ["id", "userId", "validTill"],
      logging: console.log,
    });
    // if (subscription && subscription.length > 0) {
    //     NotificationSubscription.sendNotificationWillExpire(
    //         subscription.map(e => e.userId),
    //         day
    //     ).then();
    // }
  } catch (error) {
    customErrorLogger(error);
  }
};
