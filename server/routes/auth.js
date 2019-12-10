const express = require("express");
const router = express.Router();
const User = require("../model/userModel");
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const auth = require("./middleware/auth");
const passport = require("passport");
//@route POST/auth
//@desc  Authorizing user
//@access  Public

router.post("/", (req, res) => {
  const { email, password } = req.body;

  // Validation
  if (!email || !password) {
    return res.status(400).json({ msg: "please enter all fields" });
  }

  //check existing user
  User.findOne({ email: email }).then(user => {
    if (!user) return res.status(400).json({ msg: "User does not exists" });
    // Validate password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });
      jwt.sign(
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
              name: user.name,
              email: user.email,
              avatar: user.avatar
            }
          });
        }
      );
    });
  });
});

//@route GET/user
//@desc  Authorizing user (Validate user with the token)
//@access  Private

router.get("/user", auth, (req, res) => {
  User.findById(req.user.id)
    .select("-password")
    .then(user => res.json(user));
});

// auth with google+
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"]
  })
);

// callback route for google to redirect to
// hand control to passport to use code to grab profile info
router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
  res.send("you reached the redirect URI");
});

module.exports = router;
