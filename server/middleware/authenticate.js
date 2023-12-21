const jwt = require("jsonwebtoken");
const User = require("../models/userSchema");

const authenticate = async (req, res, next) => {
  try {
    const token = req.cookies.amazon;

    if (!token) {
      return res.status(401).send("Unauthorized: No token provided");
    }

    const verifyToken = jwt.verify(token, process.env.JWT_SECRET);

    const rootUser = await User.findOne({
      _id: verifyToken._id,
      "tokens.token": token,
    });

    if (!rootUser) {
      throw new Error("User Not Found");
    }

    req.token = token;
    req.rootUser = rootUser;
    req.userID = rootUser._id;

    next();
  } catch (error) {
    console.error("Authentication Error:", error);
    res.status(401).send("Unauthorized: Invalid token");
  }
};

module.exports = authenticate;
