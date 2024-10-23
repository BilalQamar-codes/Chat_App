const express = require('express')
const User = require('../models/users');
const { generateToken } = require('../utils/generateTokken');

async function login(req,res){
    const {name,email,password} = req.body;
    if ( !email || !password){
        res.status(400).send("A field is missing!")
    }

    const isUser = await User.findOne({
        email : req.body.email,
        password : req.body.password
    });

    if (isUser){
     res.status(200).json({
        messege : "you have successfully logged In !",
        user: isUser
     });
    }

    else{
        res.status(400).json({
            messege : "user not found"
        })
    }
    
}

const register = async (req, res) => {
    // console.log(req.body);
    const {name, phoneNumber, email, password} = req.body;
    try {
      const user = await User.findOne({ email: req.body.email });
      if (user) {
        return res.status(400).json({ message: 'User already exists' });
      }
      // Logic to create a new user
      const newUser = await User.create({
        name: name,
        email:email,
        phoneNumber: phoneNumber,
        password:password
      })
      if(newUser){
        res.status(200).json({ 
            message: 'User registered successfully' ,
            id: newUser._id,
            name:newUser.name,
            email:newUser.email,
            phoneNumber:newUser.phoneNumber, 
            jwtToken: generateToken(newUser._id)
        });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

async function getallUsers(req, res) {
    try {
        const users = await User.find({});
        res.status(200).json(users);
    }
    catch(err){
        res.status(500).json({messege: err.message})
    }
    
}

module.exports = {login, register, getallUsers}