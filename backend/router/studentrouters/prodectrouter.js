const express = require("express");
const app = express();
const Router = express.Router();
const {
  prodectget,
  prodectpost,
  prodectput,
  prodectdelete,
} = require("../../controllers/studentconrollers/prodectcontroller");
// const router = require('../userauthroutes');
Router.use(express.json());
Router.get("/:_id", prodectget);
Router.post("/", prodectpost);
Router.put("/:_id", prodectput);
Router.delete("/:_id", prodectdelete);

module.exports = Router;
