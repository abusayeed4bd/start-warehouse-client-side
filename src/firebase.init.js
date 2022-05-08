// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {useAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8j3yxaBLjklfLDXkH62XWiXIie-gPKwQ",
  authDomain: "react-node-mongo-warehouse.firebaseapp.com",
  projectId: "react-node-mongo-warehouse",
  storageBucket: "react-node-mongo-warehouse.appspot.com",
  messagingSenderId: "876033744364",
  appId: "1:876033744364:web:0bbe31fdbfcb4a54d574c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = useAuth(app);
export default auth;