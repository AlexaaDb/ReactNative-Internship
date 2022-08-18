//import * as firebase from "@react-native-firebase/app";
//import firebase from "@react-native-firebase/app";
import firebase, { initializeApp } from "@react-native-firebase/app";
//import { getFirestore, collection } from "firebase/firestore";
import firestore from "@react-native-firebase/firestore";
import auth from "@react-native-firebase/auth";
//import "firebase/firestore";
//import { getAuth } from "firebase/auth";
//import "firebase/auth";
//import "firebase/analytics";

const config = {
  apiKey: "AIzaSyDXes-9EEPCk4SYQPcUSzKB1chIPJT_u4U",
  authDomain: "redwire-ad.firebaseapp.com",
  projectId: "redwire-ad",
  databaseURL: "https://redwire-ad.firebaseio.com",
  storageBucket: "redwire-ad.appspot.com",
  messagingSenderId: "28864978879",
  appId: "1:28864978879:web:b491e101c8fa8a84a1cb0a",
  measurementId: "G-Z5N89FSS0S",
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
//initializeApp(config);
//const auth = getAuth(app);

//const db = getFirestore(app);
const db = firebase.firestore();

export default { firebase, auth };
