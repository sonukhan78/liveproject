const mongodb = require("mongodb");
const user = require("../module/userSchema");
const asyncHander = require("express-async-handler");
const { insertMany } = require("../module/userSchema");

const getusers = asyncHander(async (req, res) => {
  let data = await user.find({});
  
  res.status(200).json({ message: data });
});

const postusers = asyncHander(async (req, res) => {
  let data = await user.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    address: req.body.address,
  });
  
  res.status(200).json({ message: data });
});
const putusers = async (req, res) => {
  const findId = await user.findById(req.params.id);
  if (!findId) {
    req.status(400);
    res.send("User Not Found");
  }
  const updateuser = await user.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  
  res.status(200).json({ message: `putdata"${req.params.id}` });
};

const deleteusers = asyncHander(async (req, res) => {
  // let data = await user.deleteOne({
  //   _id: new mongodb.ObjectId(req.params._id),
  // });
  const findId=await data.findById(req.params.id);
  if(!findId){
    res.status(400)
    res.send("user not found")
  }
  // console.log("=====>", deleteusers);
  await findId.remove();
  res.status(200).json({ message: 'deletedata  ${req,params,id}' });
});

module.exports = {
  getusers,
  postusers,
  putusers,
  deleteusers,
};
