const express = require("express");
const Router = express.Router();
Router.use(express.json());

const {
  Twelveimage,
} = require("../../controllers/imagecontroller/Twelveimage");

Router.get("/", Twelveimage);

module.exports = Router;
