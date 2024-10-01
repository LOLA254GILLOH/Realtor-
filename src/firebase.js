// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFYefy6W3ex27uRF-rD5Yqc5pEcPuPHDI",
  authDomain: "realtor-react-6627e.firebaseapp.com",
  projectId: "realtor-react-6627e",
  storageBucket: "realtor-react-6627e.appspot.com",
  messagingSenderId: "297124844131",
  appId: "1:297124844131:web:1f432a263e04aef6859e56",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
