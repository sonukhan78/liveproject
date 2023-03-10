const bcrypt = require("bcrypt");
const studentproduct = require("../../module/studentmodules/Productsmodule");
const asyncHandler = require("express-async-handler");

const productsget = async (req, res) => {
  let data = await studentproduct.find();
  console.log("======>", data);
  res.status(200).json(data);
};

const productspost = async (req, res) => {
  const { Men, Women, Electronic } = req.body;
  let data = await studentproduct.create({
    Men,
    Women,
    Electronic,
  });
  res.send(data);
};

const productsput = async (req, res) => {
  let findid = await Users.findById(req.params._id);
  if (!findid) {
    res.status(300);
    res.send("user not found");
  }

  const updateusers = await Users.findByIdAndUpdate(req.params._id, req.body, {
    new: true,
  });
  console.log("=====>", updateusers);

  res.status(200).json({ message: `updatedata ${req.params._id}` });
};

const productsdelete = async (req, res) => {
  let findid = await Users.findById(req.params._id);
  if (!findid) {
    res.status(300);
    res.send("user not found");
  }
  if (generateToken) {
    await findid.remove();
  }
  res.status(200).json({ message: `delete data ${req.params._id}` });
};

const generateToken = (id) => {
  return (
    jwt.sign({ id }),
    process.env.JWT_SECRET,
    {
      expiresIn: "40d",
    }
  );
};

module.exports = {
  productsget,
  productspost,
  productsput,
  productsdelete,
};
