const express = require('express');
const chatController = require('../controllers/chatControllers')
const Router = express.Router();

Router.get('/test', chatController.test);
Router.post('/fetchchats',chatController.fetchChat );
Router.post('/createchat', chatController.createChat);
module.exports = Router;
  