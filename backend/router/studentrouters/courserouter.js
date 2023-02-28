const express=require('express');
const app=express();
const Router = express.Router()
const {courseget,coursepost,coursgets} = require("../../controllers/studentconrollers/coursecontroller")
Router.use(express.json())
Router.get("/",courseget);
Router.post("/",coursepost);
Router.get("/:_id",coursgets);


module.exports = Router;