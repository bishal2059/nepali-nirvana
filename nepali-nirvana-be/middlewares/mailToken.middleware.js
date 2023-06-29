const fs = require("fs");
const path = require("path");
const jwt = require("jsonwebtoken");
const config = require("../services/config");

const redirectPage = fs.readFileSync(
  path.join(__dirname, "..", "services", "verify.redirect.html"),
  "utf-8"
);

const verifyToken = async function (token) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, config.EMAIL_VERIFY_SECRET, (error, decodedToken) => {
      if (error) {
        console.log(error.message);
        if (error.message === "jwt expired") {
          reject("Token Expired");
        } else {
          reject("Token Unverified");
        }
      } else {
        resolve(decodedToken);
      }
    });
  });
};

const mailTokenVerification = async function (req, res, next) {
  const token = req.params.token;
  if (!token) {
    return res
      .status(400)
      .send(redirectPage.replace("[[message]]", "Token ID is missing"));
  }
  try {
    const decodedToken = await verifyToken(token);
    res.locals = decodedToken;
    next();
  } catch (err) {
    return res
      .status(400)
      .send(
        redirectPage.replace(
          "[[message]]",
          `An error occured: ${err}. Please try again`
        )
      );
  }
};

module.exports = {
  mailTokenVerification,
};
