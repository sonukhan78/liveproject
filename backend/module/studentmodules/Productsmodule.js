const mongoose = require("mongoose");
const studentproduct = new mongoose.Schema({
  Men: {
    type: Object,
  },

  Women: {
    type: Object,
  },

  Electronic: {
    type: Object,
  },
});
module.exports = mongoose.model("Products", studentproduct);
