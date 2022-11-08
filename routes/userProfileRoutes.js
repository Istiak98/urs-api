const express = require('express');
const { userProfile, updateUser, changePassword } = require('../controllers/userController');
const userRequireAuth = require('../middleware/userRequireAuth');
const validation = require('../middleware/validationMiddleware');
const { userUpdateValidation, passwordValidation } = require('../validations/userValidation');



// express router
const userProfileRoutes = express();
userProfileRoutes.use(userRequireAuth)

// // get user
userProfileRoutes.get('/', userProfile);
// update user
userProfileRoutes.patch("/", validation(userUpdateValidation), updateUser)
// change password
userProfileRoutes.post('/change_password/', validation(passwordValidation), changePassword);




// export modules
module.exports = userProfileRoutes;