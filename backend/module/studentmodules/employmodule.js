const mongoose = require("mongoose")
const employschema = new mongoose.Schema({
    // employid:{
    //     type:String
    // },
    employname:{
        type:String
    },
     
    employnumber:{
        type:Number
    },
    employemail:{
        type:String
    },
    employaddress:{
        type:String
    },
    employdob:{
        type:Number
    },
    employment:{
        type:Number
    },
});

module.exports = mongoose.model("employ",employschema)