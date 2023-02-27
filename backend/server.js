const express = require("express");
// app.use("/api/user", require("./router/userrouter"));
const { product } = require("./module/productmodule");
const multer = require("multer");
const path = require("path");
const app = express();
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
app.use(express.urlencoded({ extended: false }));
app.use("/upload", express.static("backend/image"));
const { errorHandler } = require("./middleware/errormiddleware");``
app.use(errorHandler);
app.use("/api/tudo", require("./router/Todorouter"));
app.use("/api/studentsubject",require("././router/studentrouters/studentrouter"))
app.use("/api/countrycode",require("././router/studentrouters/countryrouter"))
app.use("/api/userAuth", require("./router/userAuthrouter2"));
app.use("/api/product", require("./router/productrouter"));
app.use("/api/userAuth", require("./router/userAuthrouter"));
// const mobileprodect = require("./model/mobileModel");
app.use("/upload", express.static("image"));
const Connectdb = require("./config/db");
const router = require("./router/Todorouter");
Connectdb();
const storage = multer.diskStorage({
  destination: "./image",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()} ${path.extname(file.originalname)}`
    );
  },
});
let upload = multer({
  storage: storage,
});

app.post("/upload", upload.single("profile"), async (req, res) => {
  const data = await mobileprodect.create({
    mobile: req.body.mobile,
    brand: req.body.brand,
    price: req.body.price,
    imgage: `http://localhost:8000/uploard/${req.file.filename}`,
  });
  res.send(data);
  // res.json({
  //   sussess: 1,
  //   profile_url: `http://localhost:8000/upload/${req.file.filename}`,
  // });
});

const ConnectDB = require("./config/db");
// const { diskStorage } = require('multer');
ConnectDB();

app.listen(port, () => {
  console.log(`port is colled${port}`);
});

console.log(process.env.MONGO_URL);

module.exports = upload;

// const fileupload = multer({
//    storage: multer.diskStorage({
//     destination : function (req,file,cb){
//              cb(null,"image")
//     },
//     filename: function (req,file,cb){
//         cb(null,file.fieldname+".jpg")
//     }
//    })
// }).single("data")

// app.post("/",fileupload,(req,res)=>{
//     res.send("fileupload")
// });
