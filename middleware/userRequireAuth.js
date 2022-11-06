const jwt = require("jsonwebtoken");
const UserModel = require("../models/userModel");
require("dotenv").config();

const userRequireAuth = async (req, res, next) => {

  const { authorization } = req.headers;
  
  if (!authorization) {
    res.status(401).send({ message: "Unauthorized User" });
  }
  

  if (authorization && authorization.startsWith("Bearer")) {
    try {
      
      const token = authorization.split(" ")[1];
      
      const { _id } = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
      req.user = await UserModel.findById({ _id }).select("_id");
      next();
    } catch (error) {
      res.status(401).send({ message: "Unauthorized User" });
    }
  }
};

module.exports = userRequireAuth;