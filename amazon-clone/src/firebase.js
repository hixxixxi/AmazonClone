// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDivPzebZxC_KU9lWqQMCGpaxdgZKHWUOE",
  authDomain: "web-83042.firebaseapp.com",
  projectId: "web-83042",
  storageBucket: "web-83042.appspot.com",
  messagingSenderId: "546299172139",
  appId: "1:546299172139:web:d894766f21aa3221c9e16e",
  measurementId: "G-4G3R9MNMJ0",
};

const firebaseeApp = firebase.initializeApp(firebaseConfig);

const db = firebaseeApp.firestore();
const auth = firebase.auth();

export { db, auth };
