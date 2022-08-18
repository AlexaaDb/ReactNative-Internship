import { exp } from "react-native-reanimated";
import { firebase, usersCollection } from "../../firebase";
//import { onAuthStateChanged } from "firebase/auth";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";

export const registerUser = async ({ email, password }) => {
  try {
    const response = await auth().createUserWithEmailAndPassword(
      email,
      password
    );
    const { user } = response;
    const userProfile = {
      uid: user.uid,
      email: email,
    };
    await usersCollection.doc(user.uid).set(userProfile);
    return { isAuth: true, user: userProfile };
  } catch (error) {
    return { error: error.message };
  }
};

export const loginUser = async ({ email, password }) => {
  try {
    const response = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);

    const userProfile = await usersCollection.doc(response.user.uid).get();
    const data = userProfile.data();
    return { isAuth: true, user: data };
  } catch (error) {
    return { error: error.message };
  }
};

export const autoSignIn = () =>
  new Promise((resolve, reject) => {
    auth().onAuthStateChanged((user) => {
      console.log("e in autosignin");
      console.log(user.uid);
      if (user) {
        getUserFirestoreId().then((data) => {
          resolve({ isAuth: true, user: data?.data() });
        });
      } else {
        resolve({ isAuth: false, user: [] });
      }
    });
  });

export const logoutUser = () => firebase.auth().signOut();

export const getUserFirestoreId = async (uid) => {
  const userId = await firestore().collection("users").doc(uid).get();
};
