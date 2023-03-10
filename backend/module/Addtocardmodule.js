const mongoose = require("mongoose")
const addtocard = new mongoose.Schema({
    title:{
        type:String,
        required:[true,"please add the title"]
    },
    dis:{
        type:String,
        required:[true,"please add the dis"]

    },
    image:{
        type:String,
        required:[true,"please add the image"]
    },
    price:{
        type:String,
        required:[true,"please add the price"]
    },
    rating:{
        type:String,
        required:[true,"please add the rating"]
    },
    quantity:{
        type:String,
        required:[true,"please add quantity"]
    },
});

module.exports = mongoose.model("Addcart",addtocard)