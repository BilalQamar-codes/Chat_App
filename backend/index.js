const express = require('express')
const bodyparser = require('body-parser')
const connection = require('./utils/db')
const port = 3005;

const app = express()

app.use(bodyparser.json())

app.get('/',(req, res)=> {
    res.status(200).send(" Welcome to my web app.")
})

try {
    app.listen(port, ()=>{
        console.log(`server is listening to the port ${port}.`);
    });
    connection();
} catch (error) {
    console.log(error.messege)
}