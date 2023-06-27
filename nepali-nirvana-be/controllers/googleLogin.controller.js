const passport = require("passport");
const {
  createAccessToken,
  createRefreshToken,
} = require("../services/jwt.token");

const loginSuccessCallback = async function (req, res) {
  const { user } = req;

  console.log(user);

  const accessToken = await createAccessToken(user._id);
  const refreshToken = await createRefreshToken(user._id);

  res.cookie("aT", accessToken, { httpOnly: true });
  res.cookie("rT", refreshToken, { httpOnly: true });

  return res.json({ success: true, user: user._id });
};

const googleAuthMiddleware = passport.authenticate("google", {
  scope: ["profile", "email"],
});

const googleAuthCallback = passport.authenticate("google", {
  session: false,
  failureRedirect: "/",
});

module.exports = {
  loginSuccessCallback,
  googleAuthMiddleware,
  googleAuthCallback,
};
