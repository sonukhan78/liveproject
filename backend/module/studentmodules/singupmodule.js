const mongoose = require("mongoose");
const singupschema = new mongoose.Schema({
  firstname: {
    type: String,
  },

  lastname: {
    type: String,
  },

  email: {
    type: String,
  },
  password: {
    type: String,
  },
  gender: {
    type: String,
  },
});
module.exports = mongoose.model("singup", singupschema);
