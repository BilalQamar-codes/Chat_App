// src/API/axios.js
import axios from 'axios';

const Chat = axios.create({
    baseURL: "http://localhost:3005/chat",
});



export default Chat;

