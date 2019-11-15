const mongoose = require("mongoose");
const itinerarySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  img: {
    type: URL,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  hashtags: {
    type: String,
    required: true
  }
  city:{
    type: Number
    required: true
  }
});
module.exports = mongoose.model("itinerary", itinerarySchema);
