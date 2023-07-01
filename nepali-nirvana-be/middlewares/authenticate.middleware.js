const jwt = require("jsonwebtoken");
const { createAccessToken } = require("../services/jwt.token");
const config = require("../services/config");

const authenticateUser = async function (req, res, next) {
  const accessToken = req.cookies.aT;
  if (!accessToken) {
    return res.status(401).json({ error: "Authentication failed" });
  }
  try {
    const decoded = jwt.verify(accessToken, config.ACCESS_TOKEN_SECRET);
    if (!decoded) throw new Error("Access Token not verified");
    res.locals.id = decoded.id;
    return next();
  } catch (error) {
    const refreshToken = req.cookies.rT;
    if (!refreshToken) {
      return res.status(401).json({ error: "Authentication failed" });
    }

    try {
      const decoded = jwt.verify(refreshToken, config.REFRESH_TOKEN_SECRET);
      res.locals.id = decoded.id;

      const newAccessToken = await createAccessToken(req.userId);

      res.cookie("aT", newAccessToken, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 60 * 1000,
      });

      return next();
    } catch (error) {
      return res.status(401).json({ error: "Authentication failed" });
    }
  }
};

module.exports = {
  authenticateUser,
};
