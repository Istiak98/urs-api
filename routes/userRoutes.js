const express = require("express");
const { signupUser, loginUser } = require("../controllers/userController");
const validation = require("../middleware/validationMiddleware");
const {
  userSignupValidation,
  userLoginValidation,
} = require("../validations/userValidation");

// const userRequireAuth = require('../middleware/userRequireAuth');

// express router
const router = express();

router.post("/signup", validation(userSignupValidation), signupUser);

router.post("/login", validation(userLoginValidation), loginUser);


module.exports = router;