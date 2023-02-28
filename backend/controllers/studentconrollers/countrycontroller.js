const asyncHandler = require("express-async-handler");
const country = require("../../module/studentmodules/countrymodule");

const countryget = async (req, res) => {
  let data = await country.find();
  console.log("======>", data);
  res.status(200).json(data);
};

const countrypost = async (req, res) => {
  const {countrycode,countryname,schoolname,subject,email,cours,gender} =
    req.body;
 
  let data = await country.create({
    countrycode,
    countryname,
    schoolname,
    subject,
    email,
    cours,
    gender
  });

  res.status(201).json({
    data
  });
 
};

const schoolpost = async (req, res) => {
    const {countrycode,countryname,schoolname,subject,email,cours,gender} =
      req.body;
   
    let data = await country.find()
    JSON.stringify(data)
    console.log(country.countrycode,countryname,schoolname,subject);
 
    if (country.countrycode == country && country.countryname == country && subject.subname == subject ) {
      const data = await student.create({
        countrycode,
        countryname,
        schoolname,
        number,
        cours,
        gender,
        email,
        subject,
      })
  
      // res.send(data) 
    } else {
      res.send("not found")
  
    }
  
     };

module.exports = {
  countryget,
  countrypost,
  schoolpost
};