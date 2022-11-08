const yup = require("yup");

// const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];

const userSignupValidation = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
  mobile_number: yup.string().required(),
  about: yup.string().max(100),
});

const userLoginValidation = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

// user update validation
const userUpdateValidation = yup.object({
  name: yup.string(),
  email: yup.string().email(),
  mobile_number: yup.string(),
  about: yup.string().max(100),
});

// change password validation
const passwordValidation = yup.object({
  password: yup.string().min(6).max(10).required(),
});

module.exports = {
  userSignupValidation,
  userLoginValidation,
  userUpdateValidation,
  passwordValidation,
};
