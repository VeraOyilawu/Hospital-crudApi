const express = require("express")

const router = express.Router()

const { createMidwife,getAllMidwife,getOneMidwife,deleteMidwife,updateMidwife} = require("../controller/midwifeController")

router.post("/:id/create", createMidwife)
router.get("/getAll", getAllMidwife)
router.get("/getOne/:id", getOneMidwife)
router.delete("/delete/:id", deleteMidwife)
router.put("/update/:id", updateMidwife)

module.exports = router