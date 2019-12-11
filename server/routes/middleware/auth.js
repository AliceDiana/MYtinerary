const config = require("config");
const jwt = require("jsonwebtoken");

//middleware function to fetch token
function auth(req, res, next) {
  // we pass three arguments in the function. next is to proceed with next middleware once we are done
  const token = req.header("x-auth-token"); //the token is located in the req header
  // Check for token
  if (!token)
    return res.status(401).json({ msg: "No token, authorization denied" });
  try {
    // If there is a token,we verify token
    const decoded = jwt.verify(token, config.get("jwtSecret"));
    // Add user from payload, so when req sent we have the user info along the token
    req.user = decoded;
    next();
  } catch (e) {
    // if not valid, catch error and throw msg
    res.status(400).json({ msg: "Token is not valid" });
  }
}

module.exports = auth; // whenever we want a private route, just need to add auth
