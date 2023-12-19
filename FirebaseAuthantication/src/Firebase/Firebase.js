// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { initializeApp } from "firebase/compat/app";
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/database'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZmUWkUrsVJ25e8VcAIl1WuNfgXQfAxuM",
  authDomain: "cart-auth-ced69.firebaseapp.com",
  projectId: "cart-auth-ced69",
  storageBucket: "cart-auth-ced69.appspot.com",
  messagingSenderId: "781613588179",
  appId: "1:781613588179:web:54bde5924eef1246ee7e26"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export default app;