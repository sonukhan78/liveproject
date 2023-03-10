const mongoose = require("mongoose");
const Addtocard = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "please add the title"],
    },
    price: {
      type: String,
      required: [true, "please add the price"],
    },
    dis: {
      type: String,
      required: [true, "please add the dis"],
    },
    quelity: {
      type: String,
      required: [true, "please add the quelity"],
    },
    size: {
      type: String,
      required: [true, "please add the size"],
    },
    image: {
      type: String,
      required: [true, "please add the image"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("addcard", Addtocard);
