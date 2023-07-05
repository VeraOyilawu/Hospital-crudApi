const mongoose = require("mongoose")

const pharmarcistSchema = new mongoose.Schema({
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

const pharmacistModel = mongoose.model("Pharmacist", pharmarcistSchema)

module.exports = pharmacistModel