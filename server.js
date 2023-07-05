const express = require("express")

const PORT = 2222

require("./config/DB")
const app = express()

app.use(express.json())

app.use(require("./router/hospitalRouter"))
app.use(require("./router/doctorRouter"))
app.use(require("./router/midwifeRouter"))
app.use(require("./router/nurseRouter"))
app.use(require("./router/pharmacistRouter"))



app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`);
})

