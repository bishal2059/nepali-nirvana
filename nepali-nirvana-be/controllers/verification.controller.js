const fs = require("fs");
const path = require("path");
const { verifyUser } = require("../models/user.model");

const redirectPage = fs.readFileSync(
  path(__dirname, "..", "services", "verify.redirect.html"),
  "utf-8"
);

const httpEmailVerificationHandler = async function (req, res) {
  const { id } = res.locals;
  try {
    await verifyUser(id);
    res
      .status(200)
      .send(
        redirectPage.replace(
          "[[message]]",
          "Congratulation!. Your account is now verified"
        )
      );
  } catch (err) {
    console.log(err.message);
    res
      .status(500)
      .send(
        redirectPage.replace(
          "[[message]]",
          `You account couldn't be verified. Please Try again later ${err.message}`
        )
      );
  }
};

module.exports = { httpEmailVerificationHandler };
