import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAREzCr_y2ap9kO3GKLzk_wNnLWCMKl58U",
  authDomain: "clone-b4423.firebaseapp.com",
  databaseURL: "https://clone-b4423.firebaseio.com",
  projectId: "clone-b4423",
  storageBucket: "clone-b4423.appspot.com",
  messagingSenderId: "527214135224",
  appId: "1:527214135224:web:123470dd82d006dca6f14d",
  measurementId: "G-JG20QBKYZN",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
