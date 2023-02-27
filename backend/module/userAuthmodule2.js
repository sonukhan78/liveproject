const mongoose = require('mongoose');
const UserAuthSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: [true, 'Please add an Name ']
    },
    email: {
        type: String,
        required: [true, 'Please add an email']
    },
    password: {
        type: Number,
        required: [true, 'Please add an password']
    },


 }, 
 {
    timestamps: true
}
);

module.exports = mongoose.model('userAuth',UserAuthSchema)