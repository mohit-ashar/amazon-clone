// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBcYGz5c_ljpqKzww5YPSSHWVMf_JFFUAo",
  authDomain: "challenge-609ba.firebaseapp.com",
  projectId: "challenge-609ba",
  storageBucket: "challenge-609ba.appspot.com",
  messagingSenderId: "955288723815",
  appId: "1:955288723815:web:4dfdc03a9763257c5c0fc2",
  measurementId: "G-MHCFV4D97E",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { auth, db };
