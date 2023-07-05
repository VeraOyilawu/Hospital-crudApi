const nurseModel = require("../model/nurseModel")
const hospitalModel = require("../model/hospitalModel")

const createNurse = async(req, res) => {
   try {
   const hospital = await hospitalModel.findById(req.params.id)
   const nurse = new nurseModel(req.body)

   hospital.nurses.push(nurse)
   hospital.save()
   nurse.save()

   res.status(201).json({
    message: "Nurse greated sucessfully",
    data: nurse
   })

   } catch (error) {
    res.status(200).json({
        message: error.message
    })
   }
}

const getAllNurse = async(req, res) => {
    try {
        const AllNurses = await nurseModel.find()

        res.status(200).json({
            message: "All nurses available are " + AllNurses.length,
            data: AllNurses
        })
    } catch (error) {
     res.status(200).json({
         message: error.message
    })  
    }
}

const getOneNurse = async(req, res) => {
    try {
        const id = req.params.id
        const oneNurse = await nurseModel.findById(id)

        res.status(200).json({
            data: oneNurse
        })
    } catch (error) {
     res.status(200).json({
        message: error.message
       }) 
    }
}

const deleteNurse = async(req, res) => {
    try {
       const id = req.params.id
       const deletedNurse = await nurseModel.findByIdAndDelete(id)

       res.status(200).json({
        message: `The nurse with this id ${id} has been deleted `,
        data: deletedNurse
       })
    } catch (error) {
     res.status(200).json({
        message: error.message
           })  
    }
}

const updateNurse = async(req, res) => {
    try {
     const id = req.params.id
     const update = await nurseModel.findByIdAndUpdate(id, req.body , {new: true})
     res.status(200).json({
         message: "This nurse has been updated",
         data: update
     })
    } catch (error) {
     res.status(404).json({
         message: error.message
     }) 
    }
 }


 module.exports = {
    createNurse,
    getAllNurse,
    getOneNurse,
    deleteNurse,
    updateNurse
 }