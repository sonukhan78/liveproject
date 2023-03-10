const express = require("express");
const Router = express.Router();
Router.use(express.json());
const { Siximage } = require("../../controllers/imagecontroller/Siximage");

Router.get("/", Siximage);

module.exports = Router;
