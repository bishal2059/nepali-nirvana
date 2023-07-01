const express = require("express");
const { httpRemoveHandler } = require("../controllers/remove.controller");

const RemoveRoute = express.Router();

RemoveRoute.get("/:id", httpRemoveHandler);

module.exports = RemoveRoute;
