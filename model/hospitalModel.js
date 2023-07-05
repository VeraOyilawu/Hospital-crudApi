const mongoose = require("mongoose")

const hospitalSchema = new mongoose.Schema({
    name: {
        type : String,
        required : true,
    },
    email: {
        type : String,
        required : true,
        unique: true   
    },
    address: {
        type: String
    },
    doctors: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor"
    }],
    nurses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Nurse"
    }],
    pharmarcists:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Pharmarcist"
    }],
    midWifes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Midwife"
    }]
})

const hospitalModel = mongoose.model("Hospital", hospitalSchema)

module.exports = hospitalModel