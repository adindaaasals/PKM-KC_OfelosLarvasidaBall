// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAczIZP1tvhrNIFCgkg0SU2nePW8UPhLQ0",
  authDomain: "project-ofelos.firebaseapp.com",
  databaseURL: "https://project-ofelos-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "project-ofelos",
  storageBucket: "project-ofelos.appspot.com",
  messagingSenderId: "488418278390",
  appId: "1:488418278390:web:778cb8ca0b87a35a5ae5d7",
  measurementId: "G-JPEKV15RVN"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const firebase = getDatabase(firebaseApp);

export default firebaseApp;