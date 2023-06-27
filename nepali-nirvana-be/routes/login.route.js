const express = require("express");
const { httpLoginHandler } = require("../controllers/login.controller");
const {
  googleAuthMiddleware,
  googleAuthCallback,
  loginSuccessCallback,
} = require("../controllers/googleLogin.controller");

const loginRoute = express.Router();

loginRoute.post("/", httpLoginHandler);

loginRoute.get("/google", googleAuthMiddleware);
loginRoute.get("/google/callback", googleAuthCallback, loginSuccessCallback);

module.exports = loginRoute;
