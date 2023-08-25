
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCK1LedQB0ZnOxL-JlXcKEkgWkwWrkRH78",
  authDomain: "food-recipe-website-2fa35.firebaseapp.com",
  projectId: "food-recipe-website-2fa35",
  storageBucket: "food-recipe-website-2fa35.appspot.com",
  messagingSenderId: "1075260824920",
  appId: "1:1075260824920:web:bd30c9fc00889e2478d92d"
};


const app = initializeApp(firebaseConfig);
const auth=getAuth();

export {app, auth};