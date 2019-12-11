const mongoose = require("mongoose");
const cors = require("cors");

// Requiring necessary packages
const express = require("express");
const bodyParser = require("body-parser");

// Requiring passport
const passport = require("passport");
const passportSetup = require("./config/passport");

// DB config
const config = require("config");
const db = config.get("mongoURI");

// Setting up port
const port = process.env.PORT || 5000;

const app = express();
const cookieSession = require("cookie-session");
const googleKeys = require("./config/googleKeys");
// const db = require("../server/config/keys").mongoURI;
app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

// set up session cookies
app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000, //max age of the cookie that we send out (1day in milliseconds)
    keys: [googleKeys.session.cookieKey] //keys to encrypt cookie when we send it to the browser
  })
);

// initialize passport and the use session cookies
app.use(passport.initialize());
app.use(passport.session());

//Use Routes
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
