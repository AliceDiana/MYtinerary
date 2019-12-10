const mongoose = require("mongoose");
const cors = require("cors");

// Requiring necessary packages
const express = require("express");
const bodyParser = require("body-parser");
// Requiring passport as we've configured it
const passport = require("passport");
const config = require("config");
const db = config.get("mongoURI");

// Setting up port
const port = process.env.PORT || 5000;

// Creating express app and configuring middleware needed for authentication
const app = express();

const passportSetup = require("./config/passport");

// const db = require("../server/config/keys").mongoURI;
app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use("*/uploads", express.static("uploads"));
app.use(cors());
app.use("/cities", require("./routes/cities"));
app.use("/itineraries", require("./routes/itinerary"));
app.use("/activities", require("./routes/activity"));
app.use("/users", require("./routes/users"));
app.use("/auth", require("./routes/auth"));

app.listen(port, () => {
  console.log("Server is running on " + port + "port");
});

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Connection to Mongo DB established"))
  .catch(err => console.log(err));
