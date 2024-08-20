// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAN1_tpiHQs_Wypcaq0EkTF1DUBLjsygkI",
  authDomain: "netflixgpt-c9760.firebaseapp.com",
  projectId: "netflixgpt-c9760",
  storageBucket: "netflixgpt-c9760.appspot.com",
  messagingSenderId: "172668541349",
  appId: "1:172668541349:web:9d833886e963d95d48f04c",
  measurementId: "G-WX3CTE2KDB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();