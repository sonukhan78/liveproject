const express= require('express');
const app = express()
const Router = express.Router()
Router.use(express.json())
const {allapi} = require("../controllers/Deshbordcontroller")

Router.get("/",allapi)

module.exports = Router