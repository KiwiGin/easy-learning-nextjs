// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAv3lcmX84QpeuMaXeX49p1wUd21cD1KGE",
  authDomain: "easylearning-32251.firebaseapp.com",
  projectId: "easylearning-32251",
  storageBucket: "easylearning-32251.appspot.com",
  messagingSenderId: "260680747469",
  appId: "1:260680747469:web:02a1e37b185f7613da9c84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;