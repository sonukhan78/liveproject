const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");
const prodect= require("../module/Addtocardmodule");

const getadd = asyncHandler(async (req, res) => {
  const { title, price, dis,quelity,size, image } = req.User_id;
  if (!title || !price || !dis || !quelity || !size || !image) {
    res.status(400).json({ error: "missing the data" });
  }
  let data = await getadd.find({
    title,
    price,
    dis,
    quelity,
    size,
    image,
    token: generateToken(data.User_id)
  });
  console.log("======>", data);
  res.status(200).json({ message: data });
});

const postadd = async (req, res) => {
  const { title, price, dis,quelity,size, image } = req.body;
  if (!title && !price && !dis && !quelity && !size && !image) {
    res.status(400).json({ error: "missing the fild" });
  }
  const data = await postadd.create({
    title,
    price,
    dis,
    quelity,
    size,
    image,
    token: generateToken(data._id),
    
  });
  console.log("======>", data);

  if (!data) {
    res.status(200).json(data);
  }
};

const generateToken = (id) => {
  return jwt.sign({ User_id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = { getadd, postadd };
