const mongoose = require("mongoose")

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    gender:{
        type: String
    }
})

const doctorModel = mongoose.model("Doctor", doctorSchema)

module.exports = doctorModel

