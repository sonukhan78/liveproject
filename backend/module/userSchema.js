const mongoose = require("mongoose");

const studentSchena = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  address: String,
});

module.exports = mongoose.model("myProject", studentSchena);
