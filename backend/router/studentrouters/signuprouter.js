const express = require("express");
const app = express();
const Router = express.Router();
const {
  singupget,
  singuppost,
} = require("../../controllers/studentconrollers/signupcontroller");
Router.use(express.json());
Router.get("/:_id", singupget);
Router.post("/", singuppost);

module.exports = Router;
