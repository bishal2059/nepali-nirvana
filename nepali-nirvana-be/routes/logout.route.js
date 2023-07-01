const { httpLogoutHandler } = require("../controllers/logout.controller");
const express = require("express");

const logoutRoute = express.Router();

logoutRoute.get("/", httpLogoutHandler);

module.exports = logoutRoute;
