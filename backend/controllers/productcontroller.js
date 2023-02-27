const mongodb = require("mongodb");
const user = require("../module/productmodule");
const asyncHander = require("express-async-handler");
const { insertMany } = require("../module/productmodule");

const getproduct = async (req, res) => {
  let data = await user.find({});

  res.status(200).json({ message: data });
};

const postproduct = async (req, res) => {
  const { dis, title, quentity, prise } = req.body;
  if (!dis && !title && !quentity && !prise) {
    res.status(400);
    throw new Error("please add a all field");
  }
  let data = await user.create({
    dis: req.body.dis,
    title: req.body.title,
    quentity: req.body.quentity,
    prise: req.body.prise,
  });

  res.status(200).json({ message: data });
};
const putproduct = async (req, res) => {
  const findId = await user.findById(req.params.id);
  if (!findId) {
    req.status(400);
    res.send("product Not Found");
  }
  const updateprodect = await user.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  console.log("updatedata", updateprodect);
  res.status(200).json({ message: `putdata"${req.params.id}` });
};

const deleteproduct = async (req, res) => {
  let data = await user.deleteOne({
    _id: new mongodb.ObjectId(req.params._id),
  });
  const findId = await data.findById(req.params.id);
  if (!findId) {
    res.status(400);
    res.send("user not found");
  }
  console.log("=====>", deleteproduct);
  await findId.remove();
  res.status(200).json({ message: "deletedata  ${req,params,id}" });
};

module.exports = {
  getproduct,
  postproduct,
  putproduct,
  deleteproduct,
};

 
