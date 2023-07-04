import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCAdrNdwmjUcJfxZvifV9tofnjQ8d0BLME",
  authDomain: "taskmanager-f65a4.firebaseapp.com",
  databaseURL: "https://taskmanager-f65a4-default-rtdb.firebaseio.com",
  projectId: "taskmanager-f65a4",
  storageBucket: "taskmanager-f65a4.appspot.com",
  messagingSenderId: "234789576581",
  appId: "1:234789576581:web:d2f5d146ee5f10c1d3eeec",
  measurementId: "G-PXRJM1640R"
};


export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);