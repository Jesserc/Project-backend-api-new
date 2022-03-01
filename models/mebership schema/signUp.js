const mongoose = require ("mongoose");

const signUpSchema = new mongoose.Schema({
    newFullName: {
        type: String,
        required: true
    },
    newEmail: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true 
    },
    newPassword: {
        type: String,
        required: true
    }
   

}, { timestamps: true }) 


const signUp = new mongoose.model("SignUp", signUpSchema)

module.exports = signUp;