const yup = require("yup");

// const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];

const userSignupValidation = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
  mobile_number: yup.string().required(),
  university: yup.string().max(100),
});

const userLoginValidation = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

module.exports = {
  userSignupValidation,
  userLoginValidation,
};
