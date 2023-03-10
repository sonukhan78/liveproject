const mongoose = require("mongoose");
const prodectschema = new mongoose.Schema({
  prodecttitle: {
    type: String,
  },
  prodectdis: {
    type: String,
  },
  prodectprice: {
    type: String,
  },
  prodectimage: {
    type: String,
  },

  prodectrating: {
    type: String,
  },

  prodectexp: {
    type: String,
  },
});
module.exports = mongoose.model("prodect", prodectschema);
