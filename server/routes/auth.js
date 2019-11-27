const express = require("express");
const router = express.Router();
const User = require("../model/userModel");
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");

//@route POST /auth
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
    if (!User) return res.status(400).json({ msg: "User does not exists" });

    // Validate password
    bcrypt.compare(password, user.password).then(isMatch => {
      console.log(password);
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
            id: user.id,
            name: user.name,
            email: user.email
          });
        }
      );
    });
  });
});

module.exports = router;
