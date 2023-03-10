const bcrypt = require("bcrypt");
const profile = require("../../module/studentmodules/profilemodule");
 
const asyncHandler = require("express-async-handler");
const { json } = require("express");
const jwt = require("jsonwebtoken");

const profileget = async (req, res) => {
  const data = await profile.findById(req.params._id);
  res.status(200).json(data);
};

const profilepost = async (req, res) => {
  const result = await profile.findById(req.params._id);
  const { firstname, lastname, email, password, gender, image } = req.body;
  if (
    result.firstname == firstname &&
    result.lastname == lastname &&
    result.email == email &&
    result.password == password &&
    result.gender == gender
  ) {
    let data = await profile.create({
      firstname,
      lastname,
      email,
      password,
      gender,
      image,
    });
    res.send(data);
  }

  res.status(201).json({
    firstname: data.firstname,
    lastname: data.lastname,
    email: data.email,
    password: data.password,
    gender: data.gender,
    image: data.image,
    token: generateToken(data._id),
  });
};

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = {
  profileget,
  profilepost,
};
