const mongoose = require('mongoose');
const studentscourse = new mongoose.Schema({
   course:{
       type:Object 
   },  
    
   
   
   
})
 module.exports = mongoose.model('studentcourse',studentscourse);