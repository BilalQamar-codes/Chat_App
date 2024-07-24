const express = require('express')
const userControllers = require('../controllers/userController')
const Router = express.Router()

Router.post('/login', userControllers.login);
Router.post('/register', userControllers.register);
Router.get('/all', userControllers.getallUsers);

module.exports = Router;