// src/API/axios.js
import axios from 'axios';

const User = axios.create({
    baseURL: "http://localhost:3005/user",
});



export default User;

