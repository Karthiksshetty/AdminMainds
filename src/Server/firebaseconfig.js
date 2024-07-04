// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBO9X9KI8Ww8SZxDbhXN_NmwNDfMo0GSD8",
  authDomain: "internship-25d6c.firebaseapp.com",
  projectId: "internship-25d6c",
  storageBucket: "internship-25d6c.appspot.com",
  messagingSenderId: "62528731901",
  appId: "1:62528731901:web:1145dcd42cb0bfb39e1c94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };