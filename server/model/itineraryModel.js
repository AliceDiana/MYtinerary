//itineray model scheme

const mongoose = require("mongoose");
const itinerarySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  rating: {
    type: String,
    required: true
  },
  duration: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  hashtags: {
    type: String
  },
  city_id: {
    type: String,
    required: true
  },
  imgCity: {
    type: String,
    required: true
  },
  host: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("itinerary", itinerarySchema);
