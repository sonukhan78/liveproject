const express = require("express");
const router = express.Router();
const {
  getusers,
  postusers,
  putusers,
  deleteusers,
 
} = require("../controllers/usercontroller");
const { route } = require("./productrouter");

router.get('/',getusers)
router.post('/',postusers)
router.put('/',putusers)
router.delete('/',deleteusers)
 

// router.route("/").get(getusers).post(postusers);
// router.route("/:id").delete(deleteusers).put(putusers);


module.exports = router;
