const app = require('express')();
const shared = require('./shared');
const roles = require("../../../../config/options/global.options").OPTIONS;

app.get("/plans", shared.getPlans);

app.get(
    "/current",
    shared.currentSubscription
);
app.post(
    "/create",
    shared.create
);
module.exports = app;
