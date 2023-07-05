const express = require("express")

const router = express.Router()

const { createDoctor,getAllDoctors,getOneDoctor,deleteDoctor,updateDoctor} = require("../controller/doctorController")

router.post("/:id/createDoctor", createDoctor)
router.get("/getAllDoctors", getAllDoctors)
router.get("/getOneDoctor/:id", getOneDoctor)
router.delete("/deleteDoctor/:id", deleteDoctor)
router.put("/updateDoctor/:id", updateDoctor)

module.exports = router;