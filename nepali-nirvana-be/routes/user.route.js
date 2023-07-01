const express = require("express");
const { httpUserHandler } = require("../controllers/user.controller");

const userRoute = express.Router();

userRoute.get("/", httpUserHandler);

module.exports = userRoute;
