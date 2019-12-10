const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  provider: {
    name: String,
    socialId: String,
    email: String,
    avatar: String
  },
  local: {
    name: String,
    email: {
      type: String,
      unique: true
    },
    password: {
      type: String
    },
    avatar: String
  }
});

module.exports = mongoose.model("user", userSchema);
