const express = require("express");
const Router = express.Router();
Router.use(express.json());

const { Slider } = require("../../controllers/imagecontroller/Slider");

Router.get("/", Slider);

module.exports = Router;
