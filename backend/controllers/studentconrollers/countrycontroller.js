const asyncHandler = require("express-async-handler");
const country = require("../../module/studentmodules/countrymodule");

const countryget = async (req, res) => {
  let data = await country.find();
  console.log("======>", data);
  res.status(200).json(data);
};

const countrypost = async (req, res) => {
  const {countrycode,countryname,countryschool} =
    req.body;
 
  let data = await country.create({
    countrycode,
    countryname,
    countryschool
  });

  res.status(201).json({
    data
  });
 
};

const schoolpost = async (req, res) => {
    const {countrycode,countryname,countryschool} =
      req.body;
   
    let data = await country.find()
    if(data){
        res.status(201).json({massage:"please data response"})
    }
    if(!countrycode ||  !countryname || !countryschool){
        res.status(201).json({ 
             countryschool:data.countryschool})
       
    }
    
  
    res.status(201).json({
     countrycode: data.countrycode,
     countryname: data.countrycode,
     countrycode: data.countrycode,
    });
   
  };

module.exports = {
  countryget,
  countrypost,
  schoolpost
};