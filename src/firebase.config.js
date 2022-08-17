// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAln-xgMKhl0M2U3u9a02BlWRArrfDwi54",
  authDomain: "house-marketplace-app-fcaed.firebaseapp.com",
  projectId: "house-marketplace-app-fcaed",
  storageBucket: "house-marketplace-app-fcaed.appspot.com",
  messagingSenderId: "236067973801",
  appId: "1:236067973801:web:4631f69c53f49fe3a3d7b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()