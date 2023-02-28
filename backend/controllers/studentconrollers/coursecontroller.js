const bcrypt = require("bcrypt")
const studentcourse= require('../../module/studentmodules/coursemodule')
const asyncHandler = require('express-async-handler');
// const { json } = require("express");



const courseget= async (req, res) => {
    let data = await courseuser.find();
    console.log("======>", data);
    res.status(200).json(data)
}


const coursepost  = async (req, res) => {
    const {course}=req.body
     let data= await studentcourse.create({
         course   
     }) 
     res.send(data)

   
}   

const coursgets= async (req, res) => {
   //  console.log("=======>>",req.params._id)
     const data=await studentcourse.findById(req.params._id)
      res.status(200).json(data) 
    
}  

 module.exports={ 
    courseget,
    coursepost,
    coursgets
     
 } 