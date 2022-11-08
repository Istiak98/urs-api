const mongoose = require("mongoose");

const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },

  mobile_number: {
    type: String,
    require: true
  },
  university: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true,
  },
  profile_image: {
    type: String,
    require: false
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

userSchema.statics.signup = async function (
  name,
  email,
  mobile_number,
  university,
  password,
  profile_image) {
  const exists = await this.findOne({ email });
  // validation
  // if (!email || !password) {
  //   throw Error("All fields must be filled");
  // }
  if (exists) {
    throw Error("Email already in use");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({
    name,
    email,
    mobile_number,
    university,
    password: hash,
    profile_image
  });

  return user;
};

userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("All fields must be filled");
  }

  const user = await this.findOne({ email });

  if (!user) {
    throw Error("Invalid action");
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw Error("Invalid action");
  }

  return user;
};

module.exports = mongoose.model("URSUser1", userSchema);