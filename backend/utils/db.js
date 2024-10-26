// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
// Do not import Firebase Analytics on the backend
// const { getAnalytics } = require("firebase/analytics");

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFb3YIXLCbIPsTZMS-gD3teZwwDBEenx0",
  authDomain: "quantum-chats.firebaseapp.com",
  projectId: "quantum-chats",
  storageBucket: "quantum-chats.appspot.com",
  messagingSenderId: "915241794454",
  appId: "1:915241794454:web:c57bff2e9f86cd0f8a3bb7",
  measurementId: "G-DXMVTLPMXB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase Analytics should not be initialized in a Node.js environment
// if (typeof window !== 'undefined') {
//     const analytics = getAnalytics(app);
// }
