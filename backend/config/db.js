// const { MongoClient } = require('mongodb');
const { connect } = require("http2");
const mongoose = require("mongoose");
// const url = 'mongodb://127.0.0.1:27017';
console.log("===>", process.env.MONGO_URL);
const Connectdb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
  } catch (error) {
    console.log("===>", error);
    process.exit(1);
  }
};
module.exports = Connectdb;
