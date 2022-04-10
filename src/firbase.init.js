// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRRlYmxcF3pzcdJdJMKvivDrsw_ijJhHc",
  authDomain: "ema-john-db099.firebaseapp.com",
  projectId: "ema-john-db099",
  storageBucket: "ema-john-db099.appspot.com",
  messagingSenderId: "1086370866640",
  appId: "1:1086370866640:web:321d855b636a7b090b45d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app)
export default auth;