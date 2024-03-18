const fs = require('fs');
const sequelize = require('sequelize');

//const DIR_PATH = 'assets/uploadimages';
const DIR_PATH_EXCEL = 'assets/excel';
const db = require('../../../models');
const { Subscription } = require('../../../models');

const {
  OPTIONS,
  generateURl,
  generateResponse,
  generateOTP,
} = require('../../../config/options/global.options');
const MESSAGES = require('../../../config/options/messages.options');
const PostalPincodeRepository = require('../../../shared/repositories/postalpincode.repository');
const resCode = MESSAGES.resCode;
const Op = sequelize.Op;

exports.postUpload = async (req, res) => {
  /*if (![undefined, null, ''].includes(req.file))) {
		let filePath = `post/${DIR_PATH}/${req.file.filename}`;
		return res.json(
			generateResponse(resCode.HTTP_OK, {
				data: req.file,
				url: generateURl(filePath),
			})
		);
	} else {
		const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
		res.status(resCode.HTTP_INTERNAL_SERVER_ERROR).json(
			generateResponse(resCode.HTTP_INTERNAL_SERVER_ERROR, errors)
		);
		throw new Error(e);
	}*/
  res.send('image uploaded');
};

exports.postUploadExcel = async (req, res) => {
  if (![undefined, null, ''].includes(req.file)) {
    let filePath = `post/${DIR_PATH_EXCEL}/${req.file.filename}`;
    return res.json(
      generateResponse(resCode.HTTP_OK, {
        data: req.file,
        url: generateURl(filePath),
      })
    );
  } else {
    const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
    res
      .status(resCode.HTTP_INTERNAL_SERVER_ERROR)
      .json(generateResponse(resCode.HTTP_INTERNAL_SERVER_ERROR, errors));
    throw new Error(e);
  }
};

exports.removeUpload = async (req, res) => {
  try {
    let splitPaths = req.body.path.split('assets');
    let path = `assets${splitPaths[1]}`;
    fs.unlinkSync(path);
    return res.json(
      generateResponse(resCode.HTTP_OK, {
        message: MESSAGES.apiSuccessStrings.DELETED('Image'),
      })
    );
  } catch (e) {
    const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
    res
      .status(resCode.HTTP_INTERNAL_SERVER_ERROR)
      .json(generateResponse(resCode.HTTP_INTERNAL_SERVER_ERROR, errors));
    throw new Error(e);
  }
};

exports.searchByPinCode = async (req, res) => {
  try {
    const response = await PostalPincodeRepository.searchByPinCode(
      req.params.pincode
    );
    return res
      .status(resCode.HTTP_OK)
      .json(generateResponse(resCode.HTTP_OK, response[0]));
  } catch (e) {
    const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
    res
      .status(resCode.HTTP_INTERNAL_SERVER_ERROR)
      .json(generateResponse(resCode.HTTP_INTERNAL_SERVER_ERROR, errors));
    throw new Error(e);
  }
};

