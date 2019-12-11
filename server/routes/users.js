const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs"); //hash passwords when registering users
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
  // Validation
  //If user does not send correct fields, will receive err message
  if (!name || !email || !password || !req.file) {
    return res.status(400).json({ msg: "please enter all fields" });
  }
  //If users sends info, we check in the user model with a findOne method if it is an existing user
  User.findOne({ "local.email": email }).then(user => {
    if (user) return res.status(400).json({ msg: "User already exists" });
  });
  //If user does not exist, we create a new user
  const newUser = new User({
    local: {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      avatar: req.file.path
    }
  });

  //We use the salt to create a password hash
  bcrypt.genSalt(10, (err, salt) => {
    // 10 rounds, the higher rounds the more secures
    bcrypt.hash(newUser.local.password, salt, (err, hash) => {
      //take the password in plain text and add the salt
      if (err) throw err;
      newUser.local.password = hash; //if no error, password saved as hash
      newUser.save().then(user => {
        // we save the new user
        jwt.sign(
          // create  and sign the token with three parameters
          { id: user.id }, // the payload inside the token is the user ID  = this token can access this specific user
          config.get("jwtSecret"), // thw jwt key
          {
            expiresIn: 3600 // expires in (1h)
          },
          (err, token) => {
            if (err) throw err;
            res.json({
              // in the response, once registered give back token and user
              token,
              user: {
                id: newUser.local.id,
                name: newUser.local.name,
                email: newUser.local.email,
                avatar: newUser.local.avatar
              }
            });
          }
        );
      });
    });
  });
});

module.exports = router;
