const mongoose = require('mongoose')

const schema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    bio : {type : string},
    phoneNumber : {
        type : String,
        required : true
    },
    gmail : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    }
}, {timeStamp : true});

const User = mongoose.Model("User",schema)