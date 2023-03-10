const bcrypt = require("bcrypt");
const prodect = require("../../module/studentmodules/prodectmodule");
const asyncHandler = require("express-async-handler");
const { json } = require("express");

const prodectget = async (req, res) => {
  const data = await prodect.findById(req.params._id);
  res.status(200).json(data);
};

const prodectpost = async (req, res) => {
  const {
    prodecttitle,
    prodectdis,
    prodectprice,
    prodectimage,
    prodectrating,
    prodectexp,
  } = req.body;

  let data = await prodect.create({
    prodecttitle,
    prodectdis,
    prodectprice,
    prodectimage,
    prodectrating,
    prodectexp,
  });
  res.send(data);
  console.log("=================>", data);

  res.status(201).json({
    prodecttitle: data.prodecttitle,
    prodectdis: data.prodectdis,
    prodectprice: data.prodectprice,
    prodectimage: data.prodectimage,
    prodectrating: data.profilerating,
    prodectexp: data.prodectexp,
  });
};

const prodectput = async (req, res) => {
  const data = await prodect.findById(req.params._id);
  if (!data) {
    res.status(200);
    res.send("user not found");
  }
  const updatedata = await prodect.findByIdAndUpdate(req.params._id, req.body, {
    new: true,
  });
  

  res.send(updatedata);
  console.log("============>", updatedata);
};

const prodectdelete = async (req, res) => {
  const data = await prodect.findById(req.params._id);

  if (!data) {
    res.status(200).json({ massage: "valid data" });
  }
  await data.remove();
  res.status(200).json(`{massage:"invlid data"${req.params._id}}`);
};

module.exports = {
  prodectget,
  prodectpost,
  prodectput,
  prodectdelete,
};
