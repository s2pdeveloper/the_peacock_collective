const multer = require('multer');

const paths = {
  image: './assets/images',
  category: './assets/category',
  userImage: './assets/userImage',
  customerImage: './assets/customerImage',
};

const imageFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else if (file.originalname.match(/\.(pdf|docx|doc|xlsx|ppt|pptx)$/)) {
    cb(null, true);
  } else {
    cb('Please upload only images.', false);
  }
};


let storage = multer.diskStorage({
  destination: (req, file, cb) => {
console.log('paths[req.body.key]',paths[req.body.key]);

    cb(null, paths[req.body.key]);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-bezkoder-${file.originalname}`);
  },
});

let uploadFile = multer({ storage: storage, fileFilter: imageFilter });

module.exports = uploadFile;
