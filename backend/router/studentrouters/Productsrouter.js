const express=require('express');
const app=express();
const Router = express.Router()
const {productsget,productspost,productsput,productsdelete} = require("../../controllers/studentconrollers/Productscontroller")
Router.use(express.json())
Router.get("/",productsget);
Router.post("/",productspost);
Router.put("/:_id",productsput);
Router.delete("/:_id",productsdelete);


module.exports = Router