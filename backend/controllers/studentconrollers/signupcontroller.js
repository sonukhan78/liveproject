const bcrypt = require("bcrypt");
const singupp = require("../../module/studentmodules/singupmodule");
const asyncHandler = require("express-async-handler");
const { json } = require("express");
const jwt = require("jsonwebtoken");

const singupget = async (req, res) => {
  const data = await singupp.findById(req.params._id);
  res.status(200).json(data);
};

const singuppost = async (req, res) => {
  const { firstname, lastname, email, password, gender } = req.body;

  let data = await singupp.create({
    firstname,
    lastname,
    email,
    password,
    gender,
  });

  res.status(201).json({
    firstname: data.firstname,
    lastname: data.lastname,
    email: data.email,
    password: data.password,
    gender: data.gender,
    token: generateToken(data._id),
  });
};

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = {
  singupget,
  singuppost,
};
