// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firabase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_arjY0VKgZWKBgxURQsFjgsOQSn793EA",
  authDomain: "projeto-2026-testes-g9h.firebaseapp.com",
  projectId: "projeto-2026-testes-g9h",
  storageBucket: "projeto-2026-testes-g9h.firebasestorage.app",
  messagingSenderId: "1040992336096",
  appId: "1:1040992336096:web:50cca827b50da478e83885",
  measurementId: "G-6LKHPJBC3Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const fs = getFirestore(app);