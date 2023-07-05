const doctorModel = require("../model/doctorModel")
const hospitalModel = require("../model/hospitalModel")

const createDoctor = async(req, res) => {
   try {
    
    const hospital = await hospitalModel.findById(req.params.id)
    const empdoctor = new doctorModel(req.body)
    
    hospital.doctors.push(empdoctor)

    res.status(201).json({
        message: "Doctor created sucessfully",
        data: empdoctor
    })

   } catch (error) {
     res.status(404).json({
        message: error.message
     })
   }
}

const getAllDoctors = async(req, res) => {
    try {
        const AllDoctors = await doctorModel.find()

        res.status(200).json({
            message: "All doctors available are " + AllDoctors.length,
            data: AllDoctors
        })
    } catch (error) {
     res.status(200).json({
         message: error.message
    })  
    }
}

const getOneDoctor = async(req, res) => {
    try {
        const id = req.params.id
        const oneDoctor = await doctorModel.findById(id)

        res.status(200).json({
            data: oneDoctor
        })
    } catch (error) {
     res.status(200).json({
        message: error.message
       }) 
    }
}

const deleteDoctor = async(req, res) => {
    try {
       const id = req.params.id
       const deletedDoctor = await doctorModel.findByIdAndDelete(id)

       res.status(200).json({
        message: `The doctor with this id ${id} has been deleted`,
        data: deletedDoctor
       })
    } catch (error) {
     res.status(200).json({
        message: error.message
           })  
    }
}

const updateDoctor = async(req, res) => {
    try {
     const id = req.params.id
     const update = await doctorModel.findByIdAndUpdate(id, req.body , {new: true})
     res.status(200).json({
         message: "This doctor has been updated",
         data: update
     })
    } catch (error) {
     res.status(404).json({
         message: error.message
     }) 
    }
 }


 module.exports = {
    createDoctor,
    getAllDoctors,
    getOneDoctor,
    deleteDoctor,
    updateDoctor
 }