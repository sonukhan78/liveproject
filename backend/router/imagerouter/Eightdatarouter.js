const express = require("express");
const Router = express.Router();
Router.use(express.json());
const { Eightimage } = require("../../controllers/imagecontroller/Eightdata");

Router.get("/", Eightimage);

module.exports = Router;
