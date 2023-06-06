// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPbT8zdkeFyoA64b7cOjDxbcDzDXInOV4",
  authDomain: "proyecto-719dc.firebaseapp.com",
  projectId: "proyecto-719dc",
  storageBucket: "proyecto-719dc.appspot.com",
  messagingSenderId: "854944202495",
  appId: "1:854944202495:web:13c10f32afed57204d56ca"
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseBD = getFirestore(FirebaseApp);
