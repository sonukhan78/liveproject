const mongoose = require("mongoose");
const country = new mongoose.Schema(
  {
    countrycode: {
      type: String,
    },
    countryname: {
      type: String,
    },
    countryschool: {
      type: String,
    },

  },
  { timestamps: true }
);

module.exports = mongoose.model("country", country);
