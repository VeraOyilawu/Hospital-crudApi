const mongoose = require('mongoose')

const url = "mongodb://localhost/schoolDB"
const uri = ""

mongoose.connect(url).then(()=>{
    console.log('conneected.............')
}).catch(()=>{
    console.log('connection failed...')
})