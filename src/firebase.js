import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD_ijCcJ1D_44-lGXJNjz6Ape3XThcfDx8",
  authDomain: "celebrityapp-auth.firebaseapp.com",
  databaseURL: "https://celebrityapp-auth.firebaseio.com",
  projectId: "celebrityapp-auth",
  storageBucket: "celebrityapp-auth.appspot.com",
  messagingSenderId: "644337110701",
  appId: "1:644337110701:web:e5e8b8b099dbd11c77c024"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();

export default firebase;
