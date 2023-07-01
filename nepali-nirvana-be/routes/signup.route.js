const express = require("express");
const { httpSignUpHandler } = require("../controllers/signup.controller");

const signUpRoute = express.Router();

signUpRoute.post("/", httpSignUpHandler);

module.exports = signUpRoute;
