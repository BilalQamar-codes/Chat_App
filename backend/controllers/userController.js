const express = require('express')
const User = require('../models/users')

async function login(req,res){
    const {name,email,password} = req.body;
    if (!name || !email || !password){
        res.status(400).send("A field is missing!")
    }

    const isUser = await User.findOne({email});
    if (isUser){

    }
    
}

async function register(req,res){
    const {name,email,password} = req.body;
    if (!name || !email || !password){
        res.status(400).send("A field is missing!")
    }

    const isUser = await User.findOne({email});
    if (isUser) {
        throw new Error("User already exists!");
    }

    
    
}

module.exports = {login, register}