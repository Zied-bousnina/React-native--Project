
import firebase from "firebase/compat/app";
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
export const config  = {
  apiKey: "AIzaSyCM5K6j5rDfIUkHVMRWe0i-F4IdFKhVp1g",
  authDomain: "l-art-numerique.firebaseapp.com",
  projectId: "l-art-numerique",
  storageBucket: "l-art-numerique.appspot.com",
  messagingSenderId: "590215927811",
  appId: "1:590215927811:web:ae854b55dbee6e511e9636"
};

if(!firebase.apps.length) {
  firebase.initializeApp(config)
}

export {firebase}
