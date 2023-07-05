const mongoose = require("mongoose")

const midwifeSchema = new mongoose.Schema({
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
    }
})

const midWifeModel = mongoose.model("midWife", midwifeSchema)

module.exports = midWifeModel