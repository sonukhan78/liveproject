const express = require("express");
const app = express();
const Router = express.Router();
const {
  gettudo,
  getMe,
  updates,
  deletes,
  posttudo,
} = require("../controllers/Todocontroller");
Router.use(express.json());
const { protect } = require("../middleware/Authmiddleware");
Router.get("/", gettudo);
Router.get("/token", protect, getMe);
Router.post("/", protect, posttudo);
Router.put("/", updates);
Router.delete("/", deletes);

module.exports = Router;
