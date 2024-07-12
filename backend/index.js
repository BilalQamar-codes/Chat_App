const express = require('express')
const bodyparser = require('body-parser')
const port = 3005;

const app = express()

app.get('/',(req, res)=> {
    res.status(200).send(" Welcome to my web app.")
})

app.listen(port,()=>{
    console.log(`app is listening to the port ${port}.`)
})