// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: `${process.env.NEXT_FIREBASE_API_KEY}`,
  authDomain: "seer-f00cd.firebaseapp.com",
  databaseURL: "https://seer-f00cd-default-rtdb.firebaseio.com",
  projectId: "seer-f00cd",
  storageBucket: "seer-f00cd.appspot.com",
  messagingSenderId: "751411116011",
  appId: "1:751411116011:web:88ba82400820c6f5920bae",
  measurementId: "G-6BV3BHFBCB",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
