const { getUserDetails } = require("../models/user.model");

const httpUserHandler = async function (req, res) {
  const userId = res.locals.id;
  const user = await getUserDetails(userId);
  if (user?.error) {
    return res.status(400).json({ error: "User details not found" });
  }
  return res.status(200).json(user);
};

module.exports = {
  httpUserHandler,
};
