const mongoose = require("mongoose");
const subject = new mongoose.Schema(
  {
    subname: {
      type: String,
    },

  },
  { timestamps: true }
);

module.exports = mongoose.model("subject", subject);
