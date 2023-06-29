const express = require("express");
const { httpDashboardHandler } = require("../controllers/dashboard.controller");

const dashboardRoute = express.Router();

dashboardRoute.post("/", httpDashboardHandler);

module.exports = dashboardRoute;
