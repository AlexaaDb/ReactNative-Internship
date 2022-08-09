// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
//import auth from 'firebase-auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
  apiKey: "AIzaSyCj2nJWrVuPWsRrc4XBOAMfVgSHkScFcNg",
  authDomain: "rnx-ad.firebaseapp.com",
  projectId: "rnx-ad",
  storageBucket: "rnx-ad.appspot.com",
  messagingSenderId: "278384580589",
  appId: "1:278384580589:web:be41408ec2379fbc4bf9e4",
  measurementId: "G-XB34TRXNRL"
};

// Initialize Firebase
firebase.initializeApp(config);

export default firebase;
