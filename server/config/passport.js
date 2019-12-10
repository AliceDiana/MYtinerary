const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GoogleKeys = require("./googleKeys");
const userSchema = require("../model/userModel");

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
      console.log("passport callback function fired:");
      console.log(profile);
      new userSchema({
        provider: {
          socialId: profile.id,
          name: profile.displayName,
          avatar: profile.photos[0].value,
          email: profile.emails[0].value
        }
      })
        .save()
        .then(userSchema => {
          console.log("new user created: ", userSchema);
        });
    }
  )
);
