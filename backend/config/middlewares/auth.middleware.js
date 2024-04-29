const jwt = require("jsonwebtoken");
const User = require("../../models").User;
const Customer = require("../../models").Customer;
const { OPTIONS } = require("../options/global.options");

module.exports.authenticateJWT = (req, res, next) => {
  let force=true;
  const excludePath = [
    "/signup",
    "/login",
    "/resetPassword",
    "/forgotPassword",
    "/setPassword",
    "/common",
    "/contact",
    "/customer"
  ];
  if (excludePath.some((x) => req.path.includes(x))) {
    next();
    return;
  }
  let authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, jwt_payload) => {
      if (err) {
        return res.sendStatus(401);
      } else {
        if (jwt_payload && jwt_payload.id) {
          let existingUser=null
          if(req.path.includes('/website')){
            existingUser = await Customer.findOne({
              where: {
                id: jwt_payload.id,
                status: OPTIONS.defaultStatus.ACTIVE,
              },
            });
          }else{
            existingUser = await User.findOne({
              where: {
                id: jwt_payload.id,
                status: OPTIONS.defaultStatus.ACTIVE,
              },
            });
          }
        
          if (existingUser) {
            req.authenticated = true;
            req.user = existingUser;
            next();
          } else {
            return res.sendStatus(401);
          }
        } else if (!force) {
          next();
        } else {
          return res.sendStatus(403);
        }
      }
    });
  } else if (!force) {
    next();
  } else {
    return res.sendStatus(401);
  }
};
