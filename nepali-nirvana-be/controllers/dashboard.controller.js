const { getAllDestinations } = require("../models/destination.model");
const { getPagination } = require("../services/pagination");

const httpDestinationsHandler = async function (req, res) {
  const { id } = res.locals;
  const limitedPage = getPagination(req.query);
  return res
    .status(200)
    .json(await getAllDestinations(limitedPage, req.query?.search, id));
};

module.exports = {
  httpDestinationsHandler,
};
