const express = require('express')
const cors =require('cors')
const app = express()
app.use(cors())

app.get('/CS',(request,response)=>{
response.json(
       {
           HOD:"Kiran",
           student:280,
           Batches:6
        })
})
app.get('/IS',(request,response)=>{
response.json(
       {
           HOD:"Suprith",
           student:210,
           Batches:3
        })
    })

app.get('/AI',(request,response)=>{
response.json(
       {
           HOD:"Prathik",
           student:250,
           Batches:5
        })
})
app.get('/DS',(request,response)=>{
response.json(
       {
           HOD:"Prashanth",
           student:230,
           Batches:4
        })
})


app.listen(3000,()=>{
    console.log('Server started')
})