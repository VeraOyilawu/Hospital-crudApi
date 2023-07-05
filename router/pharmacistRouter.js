const express = require("express")

const router = express.Router()

const { createPharmacist,getAllPharmacist,getOnePharmacist,deletePharmacist,updatePharmacist} = require("../controller/pharmacistController")

router.post("/:id/createPharmacist", createPharmacist)
router.get("/getAllPharmacist", getAllPharmacist)
router.get("/getOnePharmacist/:id", getOnePharmacist)
router.delete("/deletePharmacist/:id", deletePharmacist)
router.put("/updatePharmacist/:id", updatePharmacist)

module.exports = router