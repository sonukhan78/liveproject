const express= require('express');
const app = express()
const Router = express.Router()
Router.use(express.json())
const {getemp,postemp,putemp,deletemp,findid}  = require("../../controllers/studentconrollers/employcontroller")

Router.get("/",getemp)
Router.post("/",postemp)
// Router.get("/me/:_id",findid)
Router.put("/:_id",putemp)
Router.delete("/:_id",deletemp)


module.exports  = Router