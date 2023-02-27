const express = require("express");
const app = express();
const db = require("./config");
const mongodb = require("mongodb");
app.use(express.json());

app.get("/", async (req, res) => {
  let data = await db();
  let result = await data.find({name:"ariz",email:"ariz34@gmail.com",number:"234567 ",password:"456789"}).toArray();
  console.log(result);

  res.send(result);
});

app.post("/home", async (req, res) => {
  let data1 = await db();
  let result1 = await data1.insertOne(req.body);

  res.send(result1);
});

app.put("/:_id", async (req, res) => {
  let data = await db();
  let result = await data.updateOne(
    { _id: new mongodb.ObjectId(req.params._id) },
    { $set: req.body }
  );
  console.log(result);
  res.send(result);
});

app.delete("/delete/:_id", async (req, res) => {
  let data = await db();
  let result = await data.deleteOne({
    _id: new mongodb.ObjectId(req.params._id),
  });

  res.send(result);
  console.log(result);
});

app.listen(5000);
