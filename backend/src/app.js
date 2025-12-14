const express = require('express')
const dotenv = require("dotenv")
const mongoose = require("mongoose")

dotenv.config()
const PORT = process.env.PORT
const MONGOSTRING = process.env.MONGOSTRING


const app = express()

app.use(express.json())

app.get("/",()=>{
    console.log("hello server");
})
app.use("/api/auth",require("../src/routes/auth.routes.js"))

try {
    mongoose.connect(MONGOSTRING).then(()=>{
        console.log("connnected to mongodb")
        console.log("starting the server at port ",PORT)
        app.listen(PORT)
    })
}catch(err){
    console.log("failed to connect to db : ",err)
}

