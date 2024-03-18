const moment = require("moment-timezone");
const { OPTIONS } = require("../../../config/options/global.options");
const timeZone = OPTIONS.timeZone;

const time = {
  getDateTime: () => {
    return moment().tz(timeZone).format("YYYY-MM-DD HH:mm:ss");
  },
  getCurrentMonth: () => {
    return moment().tz(timeZone).month() + 1;
  },
  addToCurrentDate: (days, type) => {
    return moment().tz(timeZone).add(days, type).format("YYYY-MM-DD");
  },
  getCurrentYear: () => {
    return moment().tz(timeZone).year();
  },
  addUTCDateTime: function (date, number, type) {
    if (date) {
      return moment(date).utc().add(number, type);
    }
    return moment().utc().add(number, type);
  },
  getUTCDateTime: () => {
    return moment().utc();
  },
};
module.exports = time;
