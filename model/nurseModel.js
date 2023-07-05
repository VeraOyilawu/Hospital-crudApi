const mongoose = require("mongoose")

const nurseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
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
    female: {
        type: String
    }
})

const nurseModel = mongoose.model("Nurse", nurseSchema)

module.exports = nurseModel