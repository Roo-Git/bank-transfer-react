import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const app = firebase.initializeApp ({
  apiKey: "AIzaSyDtRI1ALzKvu4-Sw0fwGrbVTTJz4zxH7EM",
  authDomain: "bank-transfer-f2af1.firebaseapp.com",
  projectId: "bank-transfer-f2af1",
  storageBucket: "bank-transfer-f2af1.appspot.com",
  messagingSenderId: "1073888681111",
  appId: "1:1073888681111:web:130383d119fb2152a51dd2",
  measurementId: "G-B823CYVJXX"
});

// Initialize Firebase
export const db = app.firestore()

// Auth
export const auth = app.auth()
export default app

