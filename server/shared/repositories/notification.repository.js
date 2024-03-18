let admin = require("firebase-admin");
let serviceAccount = require("../../config/json/key.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = sendNotification = (ids, data) => {
  if (ids.length > 0) {
    const tokens = ids.map((a) => a.deviceId);
    let message1 = {
      notification: {
        title: data.heading,
        body: data.description,
      },
      data: { type: data.type },
      tokens: tokens,
    };
    admin
      .messaging()
      .sendMulticast(message1)
      .then((response) => {
        console.log("response", response.responses);
        return;
      })
      .catch((error) => {
        console.log("error", error);
        return;
      });
  }
};

const sendNotification1 = () => {
  ids = [
    {
      deviceId:
      "cXJXzVzoQhio3HuXF2qoX4:APA91bH7gRkjP_kfMpDTM70e9F1qkJiEcLRjP_MGg_ZNzH1Z0L7OvI_RGJBOOYNAs_pMCoyoym5uZsHXqmtyl2263q__82EbVJ7h1LIInxfdfP37LEXjMLixsFSI68yNU05OLBkrbUHt"
    },
  ];
  if (ids.length > 0) {
    const tokens = ids.map((a) => a.deviceId);
    console.log("token", tokens);
    let data = {
      heading: "Congratulation and welcome",
      description:
        "Hi p n b, Thanks for onboarding with Udhari Book App.",
      type: "Welcome",
    };
    let message1 = {
      notification: {
        title: data.heading,
        body: data.description,
      },
      data: { type: data.type },
      tokens: tokens,
    };
    // console.log("message", message1);
    admin
      .messaging()
      .sendMulticast(message1)
      .then((response) => {
        console.log("response", response.responses);
        return;
      })
      .catch((error) => {
        console.log("error", error);
        return;
      });
  }
};
// sendNotification1();
