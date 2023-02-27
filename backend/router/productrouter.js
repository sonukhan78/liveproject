const express = require("express");
const router = express.Router();

// const getproduct = async (req, res) => {
//     let data = await user.find({});
//     console.log("dda=datta======>", data);
//     res.status(200).json({ message: data });
//   };
const {
  getproduct,
  postproduct,
  //   putproduct,
  //   deleteproduct,
} = require("../controllers/productcontroller");

// router.get('/',getusers)
// router.post('/',postusers)
// router.put('/',putusers)
// router.delete('/',deleteusers)
// router.get('/',(req,res)=>{

router.route("/").get(getproduct).post(postproduct);
// router.route("/:id").delete(deleteproduct).put(putproduct);

module.exports = router;
