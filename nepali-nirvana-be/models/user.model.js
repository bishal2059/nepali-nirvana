const { userModel } = require("./user.mongo");
const { isEmail } = require("validator");
const { hashString, compareEncryption } = require("../services/encrypt");
const { destinationModel } = require("./destination.mongo");

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

const getGoogleUser = async function (email, verified = false) {
  try {
    const user = await userModel.findOne({ email: email }, { __v: 0 });
    await userModel.findOneAndUpdate({ email: email }, { verified: verified });
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

const getUserWithId = async function (userId) {
  try {
    const user = await userModel.findById(userId, { __v: 0 });
    return user;
  } catch (err) {
    return { error: "User not Verified" };
  }
};

const verifyUser = async function (userId) {
  await userModel.findOneAndUpdate(
    { _id: userId },
    { $set: { verified: true } }
  );
};

const setUserDestination = async function (userId, destinationId) {
  try {
    const user = await userModel.findOneAndUpdate(
      { _id: userId },
      { $push: { destination: destinationId } }
    );

    return user;
  } catch (err) {
    return { error: "User data can't be changed" };
  }
};

const removeUserDestination = async function (userId, destinationId) {
  try {
    const user = await userModel.findOneAndUpdate(
      { _id: userId },
      {
        $pull: { destination: destinationId },
      }
    );
    return user;
  } catch (err) {
    return {
      error: "User data can't be changed",
    };
  }
};

const getDestinationById = async function (idArray) {
  const data = await destinationModel.findById(idArray[0]);
  console.log(data);
  return data;
  // return idArray.map((e) => destinationModel.findById(e));
};

const getUserDetails = async function (userId) {
  try {
    console.log(userId);
    const user = await userModel
      .findById(userId, {
        firstName: 1,
        lastName: 1,
        destination: 1,
      })
      .populate({ path: "destination" });
    return user;
  } catch (err) {
    return {
      error: "User details not found",
    };
  }
};

module.exports = {
  createNewUser,
  getUser,
  getGoogleUser,
  getUserWithId,
  verifyUser,
  setUserDestination,
  getUserDetails,
  getDestinationById,
  removeUserDestination,
};
