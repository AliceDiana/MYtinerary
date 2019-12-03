const mongoose = require("mongoose");
const activitySchema = new mongoose.Schema({
  itinerary_id: {
    type: String,
    required: true
  },
  title: {
    type: String
  },
  image: {
    type: String
  }
});

module.exports = mongoose.model("activity", activitySchema);
