const mongoose = require("mongoose");
const validator = require("validator");

const usersSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First Name is required"],
    minLength: [1, "First Name too short"],
    maxLength: [30, "First Name too long"],
    validate: {
      validator: (v) => /^[a-zA-Z]+$/.test(v),
      message: (props) => `${props.value} is invalid First Name`,
    },
  },
  lastName: {
    type: String,
    required: [true, "Last name is required"],
    minLength: [1, "Last Name too short"],
    maxLength: [30, "Last Name too long"],
    validate: {
      validator: (v) => /^[a-zA-Z]+$/.test(v),
      message: (props) => `${props.value} is invalid Last Name`,
    },
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    validate: {
      validator: (v) => validator.isEmail(v),
      message: (props) => `${props.value} is invalid email`,
    },
  },
  password: {
    type: String,
    minLength: [7, "Password too short"],
    required: [true, "Password is required"],
  },
  gender: {
    type: String,
    required: [true, "Gender is required"],
    validate: {
      validator: (v) => v === "Male" || v === "Female",
      message: (props) => `${props.value} is invalid gender`,
    },
  },
  verified: {
    type: Boolean,
    required: true,
  },
});

const userModel = mongoose.model("User", usersSchema);

module.exports = {
  userModel,
};
