const mongoose = require("mongoose");

const studentSchena = new mongoose.Schema({
  // dis: String,
  // title: String,
  // quentity: String,
  // prise: String,

  dis: {
    type: String,
    required: [true, "please add and discription"],
  },

  title: {
    type: String,
    required: [true, "please add and title"],
  },

  quentity: {
    type: String,
    required: [true, "please add and title"],
  },
  prise: {
    type: String,
    required: [true, "please add and prise"],
  },
});

module.exports = mongoose.model("myproject", studentSchena);
