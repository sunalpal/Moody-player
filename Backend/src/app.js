const express=require('express')
const Songrouter=require("./routes/songs.routes")
const cors=require('cors')
const app=express()


app.use(cors())
app.use(express.json())
app.use('/',Songrouter)

module.exports=app