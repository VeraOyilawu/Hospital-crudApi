const hospitalModel = require("../model/hospitalModel")

const createHospital = async(req, res) => {
   try {
    const newHospital = await hospitalModel.create(req.body)

    res.status(201).json({
        message: "Hospital created",
        data: newHospital
    })
   } catch (error) {
    res.status(200).json({
        message: error.message
    })
   }
}

const getAllHospital = async(req, res) => {
    try {
        const AllHospital = await hospitalModel.find()

        res.status(200).json({
            message: "All hospital available are " + AllHospital.length,
            data: AllHospital
        })
    } catch (error) {
     res.status(200).json({
         message: error.message
    })  
    }
}

const getOneHospital = async(req, res) => {
    try {
        const id = req.params.id
        const oneHospital = await hospitalModel.findById(id)

        res.status(200).json({
            data: oneHospital
        })
    } catch (error) {
     res.status(200).json({
        message: error.message
       }) 
    }
}

const deleteHospital = async(req, res) => {
    try {
       const id = req.params.id
       const deleteOne = await hospitalModel.findByIdAndDelete(id)

       res.status(200).json({
        message: `The hospital with this id ${id} has been deleted`,
        data: deleteOne
       })
    } catch (error) {
     res.status(200).json({
        message: error.message
           })  
    }
}

const updateHospital = async(req, res) => {
    try {
     const id = req.params.id
     const update = await hospitalModel.findByIdAndUpdate(id, req.body , {new: true})
     res.status(200).json({
         message: "This hospital has been updated",
         data: update
     })
    } catch (error) {
     res.status(404).json({
         message: error.message
     }) 
    }
 }


 module.exports = {
    createHospital,
    getAllHospital,
    getOneHospital,
    deleteHospital,
    updateHospital
 }