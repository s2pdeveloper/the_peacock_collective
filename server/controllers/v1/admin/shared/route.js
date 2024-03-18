const app = require('express')();
const shared = require('./shared');
const authHandler = require("../../../../config/middlewares/auth.middleware");
const roles = require("../../../../config/options/global.options").OPTIONS;

app.get("/plans", shared.getPlans);

app.get(
    "/current",
    authHandler.authenticateJWT([roles.usersRoles.SHOP_KEEPER, roles.usersRoles.CUSTOMER]),
    shared.currentSubscription
);
app.post(
    "/create",
    authHandler.authenticateJWT([roles.usersRoles.SHOP_KEEPER, roles.usersRoles.CUSTOMER]),
    shared.create
);
module.exports = app;
