const  mongoose = require('mongoose')

const loginModel = mongoose.Schema({
    email:{
        typeof:String,
        required:[true,"Enter Your Email"]
    },
// email: String,
// password:string

    password:{
        typeof:String,Number,
        required:[true,"Enter Your Password"]
    }
})

module.exports = mongoose.model('login',loginModel)