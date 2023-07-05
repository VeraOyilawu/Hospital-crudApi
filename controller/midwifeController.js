const midwifeModel = require("../model/midwifeModel")
const hospitalModel = require("../model/hospitalModel")

const createMidwife = async(req, res) => {
   try {
  const hospital = await hospitalModel.findById(req.params.id)
  const midwife = new midwifeModel(req.body)

  hospital.midWifes.push(midwife)
  midwife.save()
  hospital.save()

  res.status(201).json({
    message: "midwife created sucessfully",
    data: midwife
  })
   } catch (error) {
    res.status(200).json({
        message: error.message
    })
   }
}

const getAllMidwife = async(req, res) => {
    try {
        const AllMidwife = await midwifeModel.find()

        res.status(200).json({
            message: "All midwife available are " + AllMidwife.length,
            data: AllMidwife
        })
    } catch (error) {
     res.status(200).json({
         message: error.message
    })  
    }
}

const getOneMidwife = async(req, res) => {
    try {
        const id = req.params.id
        const oneMidwife = await midwifeModel.findById(id)

        res.status(200).json({
            data: oneMidwife
        })
    } catch (error) {
     res.status(200).json({
        message: error.message
       }) 
    }
}

const deleteMidwife = async(req, res) => {
    try {
       const id = req.params.id
       const deleteOne = await midwifeModel.findByIdAndDelete(id)

       res.status(200).json({
        message: `the midwife with this id ${id} has been deleted`,
        data: deleteOne
       })
    } catch (error) {
     res.status(200).json({
        message: error.message
           })  
    }
}

const updateMidwife = async(req, res) => {
    try {
     const id = req.params.id
     const update = await midwifeModel.findByIdAndUpdate(id, req.body , {new: true})
     res.status(200).json({
         message: "This midwife has been updated",
         data: update
     })
    } catch (error) {
     res.status(404).json({
         message: error.message
     }) 
    }
 }


 module.exports = {
    createMidwife,
    getAllMidwife,
    getOneMidwife,
    deleteMidwife,
    updateMidwife
 }