const config = require("config");
const jwt = require("jsonwebtoken");

//middleware function to fetch token
function auth(req, res, next) {
  const token = req.header("x-auth-token");
  console.log(token);

  // Check for token
  if (!token)
    return res.status(401).json({ msg: "No token, authorization denied" });

  try {
    // If there is a token,we verify token
    const decoded = jwt.verify(token, config.get("jwtSecret"));
    // Add user from payload
    req.user = decoded;
    next();
  } catch (e) {
    res.status(400).json({ msg: "Token is not valid" });
  }
}

module.exports = auth;
