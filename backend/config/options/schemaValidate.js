const { body, param, query, validationResult } = require("express-validator");
const { OPTIONS, generateURl } = require("./global.options");

exports.schemaValidation = {
  checkParamId: [param("id", "Please enter valid Id").exists().isInt()],
  updateProfile: [],
  login: [
    body("mobile", "Please enter mobile").optional(),
    body("email", "Please enter email").optional().isEmail(),
    body("password", "Please enter password").exists(),
  ],
  // Mobile App
  register: [
    body("mobile", "Please enter mobile").exists(),
    body("name", "Please enter name").exists(),
    body("email", "Please enter email").exists(),
    body("anotherMobile", "Please enter what's up number").exists(),
    body("pinCode", "Please enter pinCode").exists(),
    body("password", "Please enter password").exists(),
  ],
  createCustomer: [
    body("name", "Please enter name").exists(),
    body("mobile", "Please enter mobile").exists(),
    body("anotherMobile", "Please enter what's up number").optional(),
    body("email", "Please enter mobile").optional(),
    body("pinCode", "Please enter pin code").exists(),
    body("address", "Please enter address").optional(),
  ],
  updateCustomer: [
    param("id", "Please enter valid Id").exists().isInt(),
    body("name", "Please enter name").exists(),
    body("mobile", "Please enter mobile").exists(),
    body("anotherMobile", "Please enter what's up number").optional(),
    body("email", "Please enter mobile").optional(),
    body("pinCode", "Please enter pin code").optional(),
    body("address", "Please enter address").optional(),
  ],
  createPassbook: [
    body("customerId", "Please enter customer id").exists(),
    body("type", "Please enter type").exists(),
    body("particular", "Please enter particular").exists(),
    body("amount", "Please enter amount").optional(),
    body("paid", "Please enter role").exists().isNumeric(),
  ],
  updatePassbook: [
    param("id", "Please enter valid Id").exists().isInt(),
    body("customerId", "Please enter customer id").exists(),
    body("type", "Please enter type").exists(),
    body("particular", "Please enter particular").exists(),
    body("amount", "Please enter amount").exists().isNumeric(),
    body("paid", "Please enter role").exists().isNumeric(),
  ],
};
