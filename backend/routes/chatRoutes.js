const express = require('express');
const chatController = require('../controllers/chatControllers')
const Router = express.Router();

Router.get('/test', chatController.test);
Router.get('/fetchmessages/:id',chatController.fetchMessages );
Router.post('/fetchchats/:id',chatController.fetchChat );
Router.post('/createchat', chatController.createChat);
module.exports = Router;
