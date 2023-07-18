// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC64T4GjFRg1cLS1AdgaJPDy_VZAyWYVXI",
  authDomain: "chat-f0667.firebaseapp.com",
  projectId: "chat-f0667",
  storageBucket: "chat-f0667.appspot.com",
  messagingSenderId: "575153623705",
  appId: "1:575153623705:web:498dd11ece000424d85e08"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);