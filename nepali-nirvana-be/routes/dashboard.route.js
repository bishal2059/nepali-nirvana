const express = require("express");
const {
  httpDestinationsHandler,
} = require("../controllers/dashboard.controller");

const dashboardRoute = express.Router();

dashboardRoute.get("/", httpDestinationsHandler);

module.exports = dashboardRoute;
