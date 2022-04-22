const {sign, verify} = require("jsonwebtoken");

const JWT_SECRET = "testowy_secret";

const generateToken = (user) => {
  return sign({username: user.username, id: user.id}, JWT_SECRET);
}

const validateToken = (req, res, next) => {
  const accessToken = req.cookies["access_token"]
  if (!accessToken) {
    return res.status(400).json({error: "User not Authenticated!"})
  }
  try {
    const validToken = verify(accessToken, JWT_SECRET);
    if (validToken) {
      req.authenticated = true;
      return next();
    }
  } catch (err) {
    return res.status(400).json({error: err});
  }
};

module.exports = {generateToken, validateToken}