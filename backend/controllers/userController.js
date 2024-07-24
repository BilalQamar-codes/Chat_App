const express = require('express')
const User = require('../models/users')

async function login(req,res){
    const {name,email,password} = req.body;
    if (!name || !email || !password){
        res.status(400).send("A field is missing!")
    }

    const isUser = await User.findOne({
        email : req.body.email,
        password : req.body.password
    });

    if (isUser){
     res.status(200).json({
        messege : "you have successfully logged In !"
     });
    }

    else{
        res.status(400).json({
            messege : "user not found"
        })
    }
    
}

const register = async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (user) {
        return res.status(400).json({ message: 'User already exists' });
      }
      // Logic to create a new user
      const newUser = new User(req.body);
      await newUser.save();

      res.status(201).json({ message: 'User registered successfully' });
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