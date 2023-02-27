const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");
const user = require("../module/userAuthmodule2");

const protect = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.Authorization && req.headers.Authorization.startsWith("Bearer")
  ) {
    try {
      //get token try hender
      token = req.headers.Authorization.split(" ")[1];
      //verify toke
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      //get user from the token
      req.user = await user.findById(decoded.id).seltect("-password");
      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("Not authorize");
    }
  }
  if (!token) {
    res.status(401).json({
      massage: "Not authorized,no token",
    });
  }
});
module.exports = {
  protect,
};
