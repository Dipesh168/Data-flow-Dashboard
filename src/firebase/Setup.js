// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Import Firestore
import { getStorage } from "firebase/storage"; // Import Storage

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCPxYuhKIjKdWe2QlE1Ic240qys6KGj2M",
  authDomain: "projectreact-8df74.firebaseapp.com",
  projectId: "projectreact-8df74",
  storageBucket: "projectreact-8df74.appspot.com",
  messagingSenderId: "805592656470",
  appId: "1:805592656470:web:deb2ef17924313aca4a9f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleauth = new GoogleAuthProvider(); // No argument needed here
export const db = getFirestore(app); // Initialize Firestore and export it
export const storage = getStorage(app); // Initialize Storage and export it
