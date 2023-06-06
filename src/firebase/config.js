// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYMmxD3Z2aLhQ3Zw8-POeefSQcKQWhjUo",
  authDomain: "lune-4f6b9.firebaseapp.com",
  projectId: "lune-4f6b9",
  storageBucket: "lune-4f6b9.appspot.com",
  messagingSenderId: "816520660926",
  appId: "1:816520660926:web:060595b47dd65787ea9bef"
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseBD = getFirestore(FirebaseApp);
