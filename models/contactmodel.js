const mongoose = require ("mongoose");

const contactSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },


}, { timestamps: true })


const contact = new mongoose.model("Contact", contactSchema)

module.exports = contact;