const express=require('express');
const { ragisteruser,loginUser, getme } = require('../controllers/userAuthcontroller');
const router=express.Router();
// const {ragisteruser}=require('./controllers/userAuthcontroller')
router.post('/',ragisteruser);
router.post("/login",loginUser)
router.get('/me',getme)
module.exports=router;  