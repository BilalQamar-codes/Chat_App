const express = require('express')
const userControllers = require('../controllers/userController')
const Router = express.Router()

Router.post('login', login)

module.exports = Router;