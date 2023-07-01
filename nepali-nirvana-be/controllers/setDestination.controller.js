const { setUserDestination } = require("../models/user.model");

const httpsetDestination = function (req, res) {
  const { destinationId } = req.body;
  const userId = res.locals.id;
  const result = setUserDestination(userId, destinationId);
  if (result?.error)
    return res.status(400).json({ error: "Destination can't be added" });
  return res.status(400).json({ message: "Destination added successfully" });
};

module.exports = {
  httpsetDestination,
};
