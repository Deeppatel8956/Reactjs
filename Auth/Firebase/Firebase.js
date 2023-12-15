// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxFhQmAn03CGfUBMzaUrRrKQF32biTg4Q",
  authDomain: "auth-react-68eb6.firebaseapp.com",
  projectId: "auth-react-68eb6",
  storageBucket: "auth-react-68eb6.appspot.com",
  messagingSenderId: "973442457255",
  appId: "1:973442457255:web:1f3447cc98e66a1bd48582"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const provider=new GoogleAuthProvider();
export {auth ,provider}