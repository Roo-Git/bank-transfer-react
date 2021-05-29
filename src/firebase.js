import firebase from 'firebase/app';
import 'firebase/auth';

// Firebase Config

const app = firebase.initializeApp({
  apiKey: "AIzaSyCo_mMIY50ocfni0n7_b8LcPcWmvuj3Tb8",
  authDomain: "bank-15304.firebaseapp.com",
  projectId: "bank-15304",
  storageBucket: "bank-15304.appspot.com", 
  messagingSenderId: "932664772963",
  appId: "1:932664772963:web:bb696c629347266d74eb56",
})

// Firebase Auth

export const auth = app.auth()
export default app

// Google Auth Provider

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({

  prompt: "select_account",
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

// Facebook Auth Provider

const facebookProvider = new firebase.auth.FacebookAuthProvider()

facebookProvider.setCustomParameters({
  prompt: "select_acount",

});

export const signInWithFacebook = () => auth.signInWithPopup(facebookProvider)

// Twitter Auth Provider

const twitterProvider = new firebase.auth.TwitterAuthProvider()

twitterProvider.setCustomParameters({
  prompt: "select_acount",

});

export const signInWithTwitter = () => auth.signInWithPopup(twitterProvider)

