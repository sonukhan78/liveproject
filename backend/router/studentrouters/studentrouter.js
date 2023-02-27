const express = require("express");
const app = express();
const Router = express.Router();
const {studentget,studentpost} = require("../../controllers/studentconrollers/studentcontroller");
Router.use(express.json());
Router.get("/", studentget);
Router.post("/", studentpost);

module.exports = Router;
