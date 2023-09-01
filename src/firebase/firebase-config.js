// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzfioHwSdeETzNj-1N1OOlRbIJBQVd40U",
  authDomain: "ofelos-larvasida-ball.firebaseapp.com",
  databaseURL: "https://ofelos-larvasida-ball-default-rtdb.firebaseio.com",
  projectId: "ofelos-larvasida-ball",
  storageBucket: "ofelos-larvasida-ball.appspot.com",
  messagingSenderId: "563675286119",
  appId: "1:563675286119:web:0f34150ed9140bb8a662c2"
  // measurementId: "G-JPEKV15RVN"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const firebase = getDatabase(firebaseApp);

export default firebaseApp;