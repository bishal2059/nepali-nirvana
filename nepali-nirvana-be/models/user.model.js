const { userModel } = require("./user.mongo");
const { isEmail } = require("validator");
const { hashString, compareEncryption } = require("../services/encrypt");

const getUser = async function (email, password) {
  try {
    if (!isEmail(email)) throw Error("Invalid Email");
    const user = await userModel.findOne({ email }, { __v: 0 });
    if (!user) throw Error("Email is not registered");
    if (user) {
      const authUser = await compareEncryption(user.password, password);
      console.log(authUser);
      if (authUser) {
        return user;
      }
      throw Error("Incorrect password");
    }
  } catch (err) {
    throw Error(err.message);
  }
};

const getGoogleUser = async function (email) {
  try {
    console.log(email);
    const user = await userModel.findOne({ email: email }, { __v: 0 });
    return user;
  } catch (err) {
    throw Error("User not found");
  }
};

const errorHandler = async function (err) {
  if (err.code === 11000) {
    return `User is already registered`;
  }
  if (err._message === "User validation failed") {
    return Object.values(err.errors)[0]?.properties?.message;
  }
  return "User registration failed";
};

const createNewUser = async function (userData) {
  try {
    const { firstName, lastName, gender, email, password } = userData;
    return await userModel.create({
      firstName,
      lastName,
      gender,
      email,
      password: await hashString(password),
      verified: false,
    });
  } catch (err) {
    console.log(err.message);
    return {
      error: await errorHandler(err),
    };
  }
};

module.exports = { createNewUser, getUser, getGoogleUser };
