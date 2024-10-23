const Chat = require('../models/chatModel')
const Message = require('../models/message')
const mongoose = require('mongoose')

function test(req, res){
    res.status(200).json("the route is working fine.")
}

async function fetchChat(req, res) {
    // console.log(req.params.id);
    if (!req.params.id){
        res.status(500).json("Valid userId is required.") 
    }

    try{
        const chats = await Chat.find({
            users : req.params.id
        })
        res.status(200).send(chats);
    }
    catch(err){
        console.error("there was an error fetching chats for the user.")
    }
}


async function createChat(req, res){

    console.log(req.body);
    try {
        // Validate input
        if (!Array.isArray(req.body.userIds) || req.body.userIds.length === 0) {
          throw new Error('User IDs must be a non-empty array.');
        }
    
        if (!req.body.adminId || !mongoose.Types.ObjectId.isValid(req.body.adminId)) {
          throw new Error('Valid admin ID is required.');
        }

        if (checkForChat(req.body.userIds)){
            res.status(200).json("chat already exist!")
        }
    
        else{
            // Create new chat document
            const newChat = new Chat({
                chatName: req.body.chatName || 'Unnamed Chat',
                isGroupChat: req.body.isGroupChat || false,
                users: req.body.userIds,
                lastMessage : req.body.messege || "Chat has not started yet!",
                groupAdmin: req.body.adminId,
            });
        
            // Save the chat document to the database
            await newChat.save();
        
            res.status(200).json("chat created successfully!");
        }
      } catch (error) {
        console.error('Error creating chat:', error.message);
    }
}

async function fetchMessages(req, res) {
    try {
        const { id } = req.params;
        console.log(id);
        const { limit = 20, skip = 0 } = req.query; // Default limit is 20, skip is 0

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json("Invalid chat ID.");
        }

        // Fetch messages with pagination
        const messages = await Message.find({
            chat: id
        });
        
        if (!messages) {
            return res.status(404).json("No messages found.");
        }

        res.status(200).json(messages);
    } catch (error) {
        console.error("Error fetching messages:", error.message);
        res.status(500).json("Could not fetch messages.");
    }
}

async function checkForChat(userIds) {
    const chat = await Chat.find({
        users : userIds
    })

    if (!chat){
        return false;
    }
    else{
        return true;
    }
}
module.exports = { test, fetchChat, createChat, fetchMessages}