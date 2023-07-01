const express = require("express");
const {
  httpEmailVerificationHandler,
} = require("../controllers/verification.controller");

const {
  mailTokenVerification,
} = require("../middlewares/mailToken.middleware");

const verifyRoute = express.Router();

verifyRoute.get("/:token", mailTokenVerification, httpEmailVerificationHandler);

module.exports = verifyRoute;
