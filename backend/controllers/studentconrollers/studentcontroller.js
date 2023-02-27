const asyncHandler = require("express-async-handler");
const studentsubject = require("../../module/studentmodules/studentmodule");

const studentget = async (req, res) => {
  let data = await studentsubject.find();
  console.log("======>", data);
  res.status(200).json(data);
};

const studentpost = async (req, res) => {
  const { subname} =
    req.body;
 
  let data = await studentsubject.create({
    subname
  });

  res.status(201).json({
    data
  });
 
};

module.exports = {
  studentget,
  studentpost,
};
