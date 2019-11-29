const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function(req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  }
});
const upload = multer({ storage: storage }); //Store all images in this folder

// User Model
const User = require("../model/userModel");

//@route POST /users
//@desc  Register new user
//@access Public

router.post("/", upload.single("avatar"), (req, res) => {
  const { name, email, password } = req.body;
  console.log(req.file);

  // Validation
  //if user does not send correct fields, will receive err message
  if (!name || !email || !password || !req.file) {
    return res.status(400).json({ msg: "please enter all fields" });
  }

  //If users sends info, we check if it is an existing user
  User.findOne({ email: email }).then(user => {
    if (user) return res.status(400).json({ msg: "User already exists" });
  });

  //If user does not exist, we create a new user
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    avatar: req.file.path
  });

  //Create salt & hash

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if (err) throw err;
      newUser.password = hash; //password saved as hash
      newUser.save().then(user => {
        //saved the user and //I want to create the token
        jwt.sign(
          { id: user.id }, //when we send token, the user ID is in there to know which user
          config.get("jwtSecret"),
          {
            expiresIn: 3600 // this token will last 3600s (1h)
          },
          (err, token) => {
            if (err) throw err;
            res.json({
              token, //once we have registered it will give us the token
              user: {
                id: newUser.id,
                name: newUser.name,
                email: newUser.email,
                avatar: newUser.avatar
              }
            });
          }
        );
      });
    });
  });
});

module.exports = router;
