import firebase from "firebase/app";
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB67Kf8zYlJQ0I4feqqzY_lR9Nb3a6SKbs",
  authDomain: "wetravel-e46ac.firebaseapp.com",
  projectId: "wetravel-e46ac",
  storageBucket: "wetravel-e46ac.appspot.com",
  messagingSenderId: "20091352789",
  appId: "1:20091352789:web:6f8e385eab7cd3b47a945c"
};

const firebaseApp =  firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {timestamp};
export default firebaseApp.firestore();