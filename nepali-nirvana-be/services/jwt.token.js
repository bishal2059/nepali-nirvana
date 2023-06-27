const jwt = require("jsonwebtoken");
const config = require("./config");

const createAccessToken = async (id) => {
  return new Promise((resolve, reject) => {
    jwt.sign(
      { id },
      config.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "10m",
      },
      (err, token) => {
        if (err) reject({ message: "Internal Server Error" });
        resolve(token);
      }
    );
  });
};

const createRefreshToken = async (id) => {
  return new Promise((resolve, reject) => {
    jwt.sign(
      { id },
      config.REFRESH_TOKEN_SECRET,
      {
        expiresIn: "1w",
      },
      (err, token) => {
        if (err) reject({ message: "Internal Server Error" });
        resolve(token);
      }
    );
  });
};

module.exports = {
  createAccessToken,
  createRefreshToken,
};
