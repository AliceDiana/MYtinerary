const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  provider: {
    name: String,
    socialId: {
      type: String
    },
    email: String,
    avatar: String
  },
  local: {
    name: String,
    email: {
      type: String
    },
    password: {
      type: String
    },
    avatar: String
  }
});

module.exports = mongoose.model("user", userSchema);
