const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GoogleKeys = require("./googleKeys");
const User = require("../model/userModel"); // User Model

passport.serializeUser((user, done) => {
  done(null, user.id); // in the done function we are passing the user (mongo id)
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    // we find the user based on the mongo id. Then, we retrieve the user
    done(null, user); // done passes the user to the next stage
  });
});

passport.use(
  new GoogleStrategy(
    {
      // options for google strategy
      clientID: GoogleKeys.google.clientID,
      clientSecret: GoogleKeys.google.clientSecret,
      callbackURL: "/auth/google/redirect"
    },
    (accessToken, refreshToken, profile, done) => {
      // passport callback function
      User.findOne({ "provider.socialId": profile.id }).then(currentUser => {
        if (currentUser) {
          // already have this user
          console.log("user is: ", currentUser);
          done(null, currentUser); // we find the user o create a new one, and pass the info to the deserialize function
        } else {
          console.log("profile", profile);
          new User({
            provider: {
              socialId: profile.id,
              name: profile.displayName,
              avatar: profile.photos[0].value,
              email: profile.emails[0].value,
              token: accessToken
            }
          })
            .save()
            .then(newUser => {
              console.log("new user created: ", newUser);
              done(null, newUser);
            });
        }
      });
    }
  )
);
