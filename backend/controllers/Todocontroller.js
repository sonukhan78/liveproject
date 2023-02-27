const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");
const User = require("../module/Todomodule");

const gettudo = async (req, res) => {
  let data = await tudo.find();
  console.log("======>", data);
  res.status(200).json(data);
};
const getMe = async (req, res) => {
  const { _id, fistname, email } = await tudo.findById(req.tudo.id);
  res.status(200).json({
    id: _id,
    fistname,
    email,
  });
};

const posttudo = async (req, res) => {
  const { fistname, lastname, email, phone, pincode, addess, password, state } =
    req.body;
  // let hashedPassword = bcrypt.hash(password,10)
  let data = await tudo.create({
    fistname,
    lastname,
    email,
    addess,
    pincode,
    phone,
    password,
    state,
  });

  res.status(201).json({
    fistname: data.fistname,
    token: generateToken(data._id),
  });

  // res.status(201).json(data)
};

const updates = async (req, res) => {
  const data = await tudos.findById(req.params._id);
  if (!data) {
    res.status(401).json({ massage: "id is not define" });
  }
  let updatedata = await tudo.findByIdAndUpdate(req.params._id, req.body, {
    new: true,
  });
  console.log("=========>", updatedata);
  //  res.status(200).json({message : `updatedata ${req.params._id}`})
  res.status(200).json({
    token: generateToken({ massage: `data is update ` }),
  });
};

const deletes = async (req, res) => {
  const data = await User.findById(req.params._id);
  if (!data) {
    res.status(401).json({ massage: "id is not define" });
  }
  if (generateToken) {
    await data.remove();
  }

  // await data.remove()

  res.status(200).json({
    token: generateToken({ massage: `data is delete` }),
  });
};

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = {
  gettudo,
  posttudo,
  updates,
  deletes,
  getMe,
};
