const app = require('express')();
const multer = require('multer');
const path = require('path');
const OPTIONS = require('../../../config/options/global.options');
const roles = require('../../../config/options/global.options').OPTIONS;

const shared = require('./shared');
//const uploadimage = require('../../../assets/uploadimages');
//const DIR_PATH = '../../../assets/uploadimages';

let postUpload = multer({
  storage: multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, './shared/upload');
    },
    filename: (req, file, cb) => {
      let name = Date.now() + file.originalname;
      cb(null, name);
    },
  }),
});
app.post(
  '/upload',
  //authHandler.authenticateJWT(roles.usersRoles.getAllRolesAsArray()),
  postUpload.single('file'),
  shared.postUpload
);

app.put(
  '/remove',
  shared.removeUpload
);
app.get('/pincode/:pincode', shared.searchByPinCode);

// app.get("/plans", shared.getPlans);

module.exports = app;
