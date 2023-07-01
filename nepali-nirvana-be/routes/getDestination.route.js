const express = require("express");
const {
  httpgetDestinationById,
} = require("../controllers/getDestination.controller");

const getDestinationByIdRouter = express.Router();

getDestinationByIdRouter.post("/", httpgetDestinationById);

module.exports = getDestinationByIdRouter;
