const jwt = require('jsonwebtoken');
const User = require('../../models').User;
const { OPTIONS } = require('../options/global.options');

exports.authenticateJWT = (force = true) => {
  return  (req, res, next) =>{
    let authHeader = req.headers.authorization;
    if (authHeader) {
      const token = authHeader.split(' ')[1];
      jwt.verify(
        token,
        process.env.JWT_SECRET_KEY,
        async  (err, jwt_payload) =>{
          if (err) {
            return res.sendStatus(401);
          } else {
            if (jwt_payload && jwt_payload.id) {
              let existingUser = await User.findOne({
                where: {
                  id: jwt_payload.id,
                  status: OPTIONS.defaultStatus.ACTIVE,
                },
              });
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
        }
      );
    } else if (!force) {
      next();
    } else {
      return res.sendStatus(401);
    }
  };
};
