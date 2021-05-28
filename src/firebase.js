import firebase from 'firebase/app';
import 'firebase/auth';

const app = firebase.initializeApp({
  apiKey: "AIzaSyCo_mMIY50ocfni0n7_b8LcPcWmvuj3Tb8",
  authDomain: "bank-15304.firebaseapp.com",
  projectId: "bank-15304",
  storageBucket: "bank-15304.appspot.com", 
  messagingSenderId: "932664772963",
  appId: "1:932664772963:web:bb696c629347266d74eb56",
})

export const auth = app.auth()
export default app
