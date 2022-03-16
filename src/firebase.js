import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD9xdFrDBRK41899TAIHQf3TDiY0JB83-A",

  authDomain: "myportfolio-59c5c.firebaseapp.com",

  projectId: "myportfolio-59c5c",

  storageBucket: "myportfolio-59c5c.appspot.com",

  messagingSenderId: "628646564504",

  appId: "1:628646564504:web:8f1baed270cc190f0836ed",
};

initializeApp(firebaseConfig);
const db = getFirestore();

export default db;
