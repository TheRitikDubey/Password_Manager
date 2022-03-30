// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJASbbnnVGkP_TGQQ8BH8lk3XjHYu21AU",
  authDomain: "password-storage-9f304.firebaseapp.com",
  projectId: "password-storage-9f304",
  storageBucket: "password-storage-9f304.appspot.com",
  messagingSenderId: "860302819076",
  appId: "1:860302819076:web:9d0d1eef44cdb5285e9a51",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
