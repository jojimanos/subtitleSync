// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2S_iW2ZzxXiT1FSsZdq126jdzjgha17g",
  authDomain: "videosync-41a0a.firebaseapp.com",
  projectId: "videosync-41a0a",
  storageBucket: "videosync-41a0a.appspot.com",
  messagingSenderId: "144248190064",
  appId: "1:144248190064:web:174b35e5020fe33d5f70b5",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const firestore = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app)

export {app, firestore, auth, storage}