// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_LLJruFcyWuOK1rFKzkS2qv_rsVYaPVc",
  authDomain: "gameandtecha9.firebaseapp.com",
  projectId: "gameandtecha9",
  storageBucket: "gameandtecha9.appspot.com",
  messagingSenderId: "238352016659",
  appId: "1:238352016659:web:fc8554562e7701561ba6e6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
