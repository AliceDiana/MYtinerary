const express = require("express");
const router = express.Router();
const User = require("../model/userModel"); // user model
const bcrypt = require("bcryptjs"); // hash password
const config = require("config"); // manage configuration values easily
const jwt = require("jsonwebtoken"); // token
const auth = require("./middleware/auth"); //middleware to make route private
const passport = require("passport"); // middleware

//@route POST/auth
//@desc  Authenticate user
//@access  Public

router.post("/", (req, res) => {
  const { email, password } = req.body;

  // Validation
  if (!email || !password) {
    return res.status(400).json({ msg: "please enter all fields" });
  }
  //Check existing user
  User.findOne({ "local.email": email }).then(user => {
    if (!user) return res.status(400).json({ msg: "User does not exists" });
    // Validate password
    bcrypt.compare(password, user.local.password).then(isMatch => {
      //compare method : plain txt password vs  hashed password
      if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });
      jwt.sign(
        //signing the token
        { id: user.id },
        config.get("jwtSecret"),
        {
          expiresIn: 3600
        },
        (err, token) => {
          if (err) throw err;
          res.json({
            token,
            user: {
              id: user.id,
              name: user.local.name,
              email: user.local.email,
              avatar: user.local.avatar
            }
          });
        }
      );
    });
  });
});

//@route GET/user
//@desc  Get current user data by using token
//jwt auth is stateless, token not stored in the server, we need a way to constantly validate token
//@access  Private

router.get("/user", auth, (req, res) => {
  User.findById(req.user.id) // i want the user by mongo id
    .select("-password") // without the password
    .then(user => {
      if (user["provider"].socialId) {
        res.json(user.provider);
      } else {
        res.json(user.local);
      }
    });
});

// Auth with google+
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"]
  })
);

// callback route for google to redirect to
// hand control to passport to use code to grab profile info
router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
  var token = jwt.sign({ id: req.user._id }, config.get("jwtSecret"), {
    expiresIn: 3600
  });
  console.log("Token google", token, req.user);

  res.redirect(`http://localhost:3000/?token=${token}`);
});

module.exports = router;
