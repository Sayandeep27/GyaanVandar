// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyAVhRg96-TLes0AA6SuCH5cTh3DvOZE_nM",
  authDomain: "blogproject-b7367.firebaseapp.com",
  projectId: "blogproject-b7367",
  storageBucket: "blogproject-b7367.appspot.com",
  messagingSenderId: "171221220166",
  appId: "1:171221220166:web:0174442e1e8e6cf35f0347"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);