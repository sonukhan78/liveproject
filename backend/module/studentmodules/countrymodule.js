const mongoose = require("mongoose");
const country = new mongoose.Schema(
  {
    countrycode: {
      type: Object,
    },
    countryname: {
      type: Object,
    },
    schoolname: {
      type: Object,
    },
    subject: {
      type: Object,
    },

    email: {
      type: String,
    },
    cours: {
      type: Object,
    },

    gender: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("country", country);
