// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQDKQqvAzpY8jnA17mgqHLvqLoLNv0xrw",
  authDomain: "rutinmaker.firebaseapp.com",
  projectId: "rutinmaker",
  storageBucket: "rutinmaker.firebasestorage.app",
  messagingSenderId: "637016816080",
  appId: "1:637016816080:web:8364432b0efdf2367321d5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
