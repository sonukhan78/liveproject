const mongoose = require('mongoose');
const profilesingup= new mongoose.Schema({
   firstname:{
       type:String
   },   

   lastname:{
    type:String
},  
 
email:{
    type:String
},
password:{
    type:String
},  
gender:{
    type:String
},  

image:{
    type:String
},     
   
                                      
   
})
 module.exports = mongoose.model('profile',profilesingup);