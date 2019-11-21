const mongoose = require("mongoose");
const activitySchema = new mongoose.Schema({
  itinerary_id: {
    type: String,
    required: true
  },
  title: {
    type: String
  },
  image1: {
    type: String,
    required: true
  },
  image2: {
    type: String,
    required: true
  },
  image3: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("activity", activitySchema);
