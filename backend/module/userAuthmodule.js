const  mongoose = require('mongoose')

const userAuthSchema = new mongoose.Schema({
    email:{
        typeof:String,
        required:[true,"Enter Your Email"]
    },
// email: String,
// password:string

    password:{
        typeof:String,
        required:[true,"Enter Your Password"]
    }
})

module.exports = mongoose.model('userAuth',userAuthSchema)