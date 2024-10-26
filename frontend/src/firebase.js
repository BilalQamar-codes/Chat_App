// frontend/src/firebase.js

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCFb3YIXLCbIPsTZMS-gD3teZwwDBEenx0",
  authDomain: "quantum-chats.firebaseapp.com",
  projectId: "quantum-chats",
  storageBucket: "quantum-chats.appspot.com",
  messagingSenderId: "915241794454",
  appId: "1:915241794454:web:c57bff2e9f86cd0f8a3bb7",
  measurementId: "G-DXMVTLPMXB"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db }; // Export for use in components
