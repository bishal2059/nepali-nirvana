const express = require("express");
const {
  httpsetDestination,
} = require("../controllers/setDestination.controller");

const setDestination = express.Router();

setDestination.post("/", httpsetDestination);

module.exports = setDestination;
