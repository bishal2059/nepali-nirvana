const { getUser } = require("../models/user.model");

const {
  createAccessToken,
  createRefreshToken,
} = require("../services/jwt.token.js");

const httpLoginHandler = async function (req, res) {
  const { email, password } = req.body;
  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }
  if (!password) {
    return res.status(400).json({ error: "Password is required" });
  }
  try {
    const userData = await getUser(email, password);

    const accessToken = await createAccessToken(userData._id);
    const refreshToken = await createRefreshToken(userData._id);

    res.cookie("aT", accessToken, {
      httpOnly: true,
      maxAge: 86400 * 1 * 1000,
    });
    res.cookie("rT", refreshToken, {
      httpOnly: true,
      maxAge: 86400 * 7 * 1000,
    });
    return res.status(200).json({ user: userData._id, success: true });
  } catch (err) {
    if (err.message === "Internal Server Error") {
      return res.status(500).json({ error: err.message });
    }
    return res.status(400).json({
      error: err.message,
    });
  }
};

module.exports = {
  httpLoginHandler,
};
