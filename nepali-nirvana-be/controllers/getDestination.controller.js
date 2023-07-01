const { getDestinationById } = require("../models/user.model");

const httpgetDestinationById = async function (req, res) {
  console.log(req.body.place);
  const data = await getDestinationById(req.body.place);
  return res.status(200).json(data);
};

module.exports = {
  httpgetDestinationById,
};
