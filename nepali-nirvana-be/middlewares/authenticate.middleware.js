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
    req.userId = decoded.id;
    return next();
  } catch (error) {
    const refreshToken = req.cookies.rT;
    if (!refreshToken) {
      return res.status(401).json({ error: "Authentication failed" });
    }

    try {
      const decoded = jwt.verify(refreshToken, config.REFRESH_TOKEN_SECRET);
      req.userId = decoded.userId;

      const newAccessToken = await createAccessToken(req.userId);

      res.cookie("aT", newAccessToken, {
        httpOnly: true,
        maxAge: 10 * 60 * 60 * 1000,
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
