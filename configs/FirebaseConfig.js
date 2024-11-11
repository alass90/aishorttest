// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "aishort-fc3e2.firebaseapp.com",
  databaseURL: "https://aishort-fc3e2-default-rtdb.firebaseio.com/",
  projectId: "aishort-fc3e2",
  storageBucket: "aishort-fc3e2.firebasestorage.app",
  messagingSenderId: "228288153354",
  appId: "1:228288153354:web:7582804d95a9a15dffdcf3",
  measurementId: "G-Q710505SYW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app);