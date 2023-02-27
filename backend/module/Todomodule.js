const mongoose = require("mongoose");
const UserTodoSchema = new mongoose.Schema(
  {
    fistname: {
      type: String,
      required: [true, 'Please add an firstname']
    },
    lastname: {
      type: String,
      required: [true, 'Please add an lastname']
    },
    email: {
      type: String,
      required: [true, 'Please add an email']
    },
    phone: {
      type: Number,
      required: [true, 'Please add an phone']
    },
    pincode: {
      type: Number,
      required: [true, 'Please add an pincode']
    },
    address: {
      type: String,
      required: [true, 'Please add an address']
    },
    state: {
      type: String,
      required: [true, 'Please add an state']
    },
    password: {
      type: String,
      required: [true, 'Please add an password']
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("tudo", UserTodoSchema);
