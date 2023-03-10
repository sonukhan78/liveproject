const express = require("express");
const app = express();
const Router = express.Router();
const {
  countryget,
  countrypost,
  schoolpost,
} = require("../../controllers/studentconrollers/countrycontroller");
Router.use(express.json());
Router.get("/", countryget);
Router.post("/", countrypost);
Router.post("/", schoolpost);

module.exports = Router;
