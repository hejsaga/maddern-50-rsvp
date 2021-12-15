import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEtsDeIv00ZJaRu6wABZoLYKDyODwArIg",
  authDomain: "maddern-50.firebaseapp.com",
  projectId: "maddern-50",
  storageBucket: "maddern-50.appspot.com",
  messagingSenderId: "33029576499",
  appId: "1:33029576499:web:1769cc583417d710afd046",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get database
const db = getFirestore(app);

// Get firebase auth instance
const auth = getAuth();

export { app as default, db, auth };
