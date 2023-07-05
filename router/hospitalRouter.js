const express = require("express")

const router = express.Router()

const { createHospital,getAllHospital,getOneHospital,deleteHospital,updateHospital} = require("../controller/hospitalController")
const { createDoctor,getAllDoctors,getOneDoctor,deleteDoctor,updateDoctor} = require("../controller/doctorController")

router.post("/createHospital", createHospital)
router.get("/getAllHospital", getAllHospital)
router.get("/:id", getOneHospital)
router.delete("/deleteHospital/:id", deleteHospital)
router.put("/updateHospital/:id", updateHospital)


module.exports = router