const mongoose = require("mongoose");
const userschema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  number: {
    type: String,
  },
  profile: {
    type: String,
  },
  employ: {
    type: String,
  },
  student: {
    type: String,
  },
  product: {
    type: String,
  },
});
module.exports = mongoose.model("newdata", userschema);
