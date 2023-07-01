const { destinationModel } = require("./destination.mongo");

const searchLogic = function (filter) {
  if (!filter) return {};
  const searchWord = filter
    .split(" ")
    .map((v) => v.replaceAll(/[^a-z0-9]/gi, ""));
  return {
    $or: searchWord
      .map((e) => {
        return [
          { placeName: new RegExp(`${e}`, "i") },
          { location: new RegExp(`${e}`, "i") },
          { category: new RegExp(`${e}`, "i") },
        ];
      })
      .flat(),
  };
};

const getAllDestinations = async function (limitedPage, filter) {
  const filterObject = searchLogic(filter);
  try {
    const allDestinations = {};
    allDestinations.destinations = await destinationModel
      .find(filterObject, { __v: 0 })
      .sort()
      .skip(limitedPage.skip)
      .limit(limitedPage.limit);
    const totalCount = await destinationModel.find(filterObject).count();
    if (limitedPage.skip === 0) {
      allDestinations.previous = false;
    } else {
      allDestinations.previous = true;
    }
    if (limitedPage.skip + limitedPage.limit >= totalCount) {
      allDestinations.next = false;
    } else {
      allDestinations.next = true;
    }
    return allDestinations;
  } catch (err) {
    return {
      error: "Destinations couldn't be found",
    };
  }
};

module.exports = { getAllDestinations };
