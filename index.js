const connectToMongo=require('./db.js')
const express=require('express')
const cors=require('cors')
connectToMongo()

const app=express()
app.use(cors())
const port=5000
app.use(express.json())
//avaliable routes

app.use('/api/items',require('./routes/items'))
app.get('/',(req,res)=>{
    res.send('hlo word')
})
app.listen(port,()=>{
    console.log(`matress app is listenning on the port ${port}`)
})