const express=require('express');
const app=express();
const Router = express.Router()
const {profileget,profilepost} = require("../../controllers/studentconrollers/profilecontroller")
Router.use(express.json())
Router.get("/",profileget);
Router.post("/:_id",profilepost); 


module.exports = Router;