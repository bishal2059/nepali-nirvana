const express = require("express");

const httpDashboardHandler = async function (req, res) {
  console.log(`User id: ${req.userId}`);
  return res.send("This is dashboard");
};

module.exports = {
  httpDashboardHandler,
};
