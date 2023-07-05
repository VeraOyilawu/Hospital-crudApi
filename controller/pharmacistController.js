const pharmacistModel = require("../model/pharmacistModel")
const hospitalModel = require("../model/hospitalModel")

const createPharmacist = async(req, res) => {
   try {
    const hospital = await hospitalModel.findById(req.params.id)
    const pharmacist = new pharmacistModel(req.body)

    hospital.pharmarcists.push(pharmacist)
    hospital.save()
    pharmacist.save()

    res.status(201).json({
        message: "Pharmacist created sucessfully",
        data: pharmacist
    })
   } catch (error) {
    res.status(200).json({
        message: error.message
    })
   }
}

const getAllPharmacist = async(req, res) => {
    try {
        const AllPharmacists = await pharmacistModel.find()

        res.status(200).json({
            message: "All pharmacist available are " + AllPharmacists.length,
            data: AllPharmacists
        })
    } catch (error) {
     res.status(200).json({
         message: error.message
    })  
    }
}

const getOnePharmacist = async(req, res) => {
    try {
        const id = req.params.id
        const onePharmacist = await pharmacistModel.findById(id)

        res.status(200).json({
            data: onePharmacist
        })
    } catch (error) {
     res.status(200).json({
        message: error.message
       }) 
    }
}

const deletePharmacist = async(req, res) => {
    try {
       const id = req.params.id
       const deleteOne = await pharmacistModel.findByIdAndDelete(id)

       res.status(200).json({
        message: `The pharmacist with this id ${id} has been deleted.`,
        data: deleteOne
       })
    } catch (error) {
     res.status(200).json({
        message: error.message
           })  
    }
}

const updatePharmacist = async(req, res) => {
    try {
     const id = req.params.id
     const update = await pharmacistModel.findByIdAndUpdate(id, req.body , {new: true})
     res.status(200).json({
         message: "This pharmacist has been updated",
         data: update
     })
    } catch (error) {
     res.status(404).json({
         message: error.message
     }) 
    }
 }


 module.exports = {
    createPharmacist,
    getAllPharmacist,
    getOnePharmacist,
    deletePharmacist,
    updatePharmacist
 }