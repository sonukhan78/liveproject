const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");
const User = require("../module/userAuthmodule2");
// des  RegisterUser new  users
// routes POST /api/userAuth
//access Public
const ragisterUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please add all fields");
  }
  //check userExists User Email
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  //check userExists User password
  // const salt = await bcrypt.getSalt(10)
  // const hashedPassword = await bcrypt.hash(password, salt)

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid User  Data");
  }
});

// des  LoginUser new  users
// routes POST /api/userAuth/login
//access Public
const loginUser = asyncHandler(async (req, res) => {
  //console.log("dsdsds====>", req.text);
  const { email, password } = req.body;
  //check the email
  const user = await User.findOne({ email });
  if (user && bcrypt.compare(password, user.password)) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
});

// genrate Token

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};
// des  Get  users Data
// routes GET /api/userAuth/me
//access Public
const getMe = asyncHandler(async (req, res) => {
  const { _id, name, email } = await User.findById(req.Users.id);
  res.status(200).json({
    id: _id,
    name,
    email,
  });
  //console.log("dsdsds====>", req.text);
  // res.json({ message: "All User data " })
});

const get = asyncHandler(async (req, res, next) => {
  const { _id, Name, email, password } = req.body;
  const user = await User.create({_id,Name,email,password,});
  if (user) {
    res.status(201).json({
      _id: user.id,
      Name: user.Name,
      password: user.password,
      email: user.email,
      Token: Token(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid User  Data");
  }
});
const Token = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30",
});
  };
  if (!Token) {
    res.status(401).json({
      massage: "token is no  janret",
    });
  }
module.exports = {
  ragisterUser,
  loginUser,
  getMe,
  get,
};
