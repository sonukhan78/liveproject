const express = require("express");
const app = express();
const Router = express.Router();
Router.use(express.json());

const {postuser, findput, deleteusre,getuser,} = require("../controllers/Usercontroller3");

Router.post("/", postuser);
Router.get("/", getuser);
Router.put("/", findput);
Router.delete("/:_id", deleteusre);

module.exports = Router;
