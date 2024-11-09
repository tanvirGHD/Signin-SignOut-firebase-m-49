// Do not Store config on the client side

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDU2K4_eCcvhfEQB7_rQdLjT8jhYrwbyXw",
  authDomain: "simple-firebase-project-81474.firebaseapp.com",
  projectId: "simple-firebase-project-81474",
  storageBucket: "simple-firebase-project-81474.firebasestorage.app",
  messagingSenderId: "211488566354",
  appId: "1:211488566354:web:ab9f5a46704f30b931438b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

