// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "ai-logo-creator-4c80e.firebaseapp.com",
  projectId: "ai-logo-creator-4c80e",
  storageBucket: "ai-logo-creator-4c80e.firebasestorage.app",
  messagingSenderId: "1009779417287",
  appId: "1:1009779417287:web:e5d4dc554812ab59b59ee2",
  measurementId: "G-Q59K59B02J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)