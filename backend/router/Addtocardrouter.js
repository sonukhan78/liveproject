const express = require("express");
const app = express();
const Router = express.Router();
Router.use(express.json());
const { getadd, postadd } = require("../controllers/Addtocardcontroller");

const { protect } = require("../middleware/cardAuthmiddlewere");

Router.get("/getadd", getadd);
Router.post("/postadd", postadd);

module.exports = Router;
