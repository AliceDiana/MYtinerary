const mongoose = require("mongoose");
const activitySchema = new mongoose.Schema({
  itinerary_id: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  img2: {
    type: String,
    required: true
  },
  img3: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("activity", activitySchema);
