const { removeUserDestination } = require("../models/user.model");

const httpRemoveHandler = async function (req, res) {
  const destinationId = req.params.id;
  const userId = res.locals.id;
  const result = removeUserDestination(userId, destinationId);
  if (result?.error)
    return res.status(400).json({ error: "Destination can't be removed" });
  return res.status(400).json({ message: "Destination removed successfully" });
};

module.exports = {
  httpRemoveHandler,
};
