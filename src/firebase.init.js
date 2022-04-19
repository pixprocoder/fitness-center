// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLhMwAIMsETOktlKA3SyJ3ZBQqUHJxBXk",
  authDomain: "the-gym-6e5dc.firebaseapp.com",
  projectId: "the-gym-6e5dc",
  storageBucket: "the-gym-6e5dc.appspot.com",
  messagingSenderId: "726461871813",
  appId: "1:726461871813:web:14c1cb6ab9fe9315f662ac",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
