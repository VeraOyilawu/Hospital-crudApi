const express = require("express")

const router = express.Router()

const { createNurse,getAllNurse,getOneNurse,deleteNurse,updateNurse} = require("../controller/nurseController")

router.post("/:id/createNurse", createNurse)
router.get("/getAll", getAllNurse)
router.get("/getOne/:id", getOneNurse)
router.delete("/deleteNurse/:id", deleteNurse)
router.put("/updateNurse/:id", updateNurse)

module.exports = router