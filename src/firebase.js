import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyBLkVUUyLb5M4nMz_YyMoXwZjwBHcOws1U",
  authDomain: "chat-app-95543.firebaseapp.com",
  projectId: "chat-app-95543",
  storageBucket: "chat-app-95543.appspot.com",
  messagingSenderId: "336668480257",
  appId: "1:336668480257:web:83b328c4d93cd67a48c100"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
