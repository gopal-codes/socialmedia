import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBD7TbLp_mA28r4LddMWXUlj5YZ_mSr0EA",
    authDomain: "socialmedia-aa8b4.firebaseapp.com",
    projectId: "socialmedia-aa8b4",
    storageBucket: "socialmedia-aa8b4.appspot.com",
    messagingSenderId: "617769597263",
    appId: "1:617769597263:web:447cc00cd02d5c8e792d3a"
  };

  // Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

