const mongoose = require("mongoose");

const coordinateSchema = new mongoose.Schema({
  latitude: Number,
  longitude: Number,
});

const destinationSchema = new mongoose.Schema({
  placeName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  img: {
    type: [String],
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  coordinates: {
    type: coordinateSchema,
    required: true,
  },
  location: {
    type: [String],
    required: true,
  },
  categories: {
    type: [String],
    required: true,
  },
});

const destinationModel = mongoose.model("destination", destinationSchema);

module.exports = {
  destinationModel,
};
