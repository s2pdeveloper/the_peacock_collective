const multer = require('multer');
const path = require("path");
// const paths = {
//   image: './assets/images',
//   category: './assets/category',
//   product: './assets/product',
//   userImage: './assets/userImage',
//   customerImage: './assets/customerImage',
// };

// const imageFilter = (req, file, cb) => {
//   if (file.mimetype.startsWith('image')) {
//     cb(null, true);
//   } else if (file.originalname.match(/\.(pdf|docx|doc|xlsx|ppt|pptx)$/)) {
//     cb(null, true);
//   } else {
//     cb('Please upload only images.', false);
//   }
// };


// let storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     console.log('paths[req.body.key]', paths[req.body.key]);

//     cb(null, paths[req.body.key]);
//   },
//   filename: (req, file, cb) => {
//     cb(null, `${Date.now()}-bezkoder-${file.originalname}`);
//   },
// });

// let uploadFile = multer({ storage: storage, fileFilter: imageFilter });

// module.exports = uploadFile;
module.exports = multer({
  storage: multer.memoryStorage(),
  fileFilter: (req, file, cb) => {
    let ext = path.extname(file.originalname);
    if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
      cb(new Error("File type is not supported"), false);
      return;
    }
    cb(null, true);
  },
});