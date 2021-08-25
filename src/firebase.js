import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAY1MkEoM7FVuHWDdq5SRPmD8_EEzFGOt4",
  authDomain: "saraay-363e2.firebaseapp.com",
  projectId: "saraay-363e2",
  storageBucket: "saraay-363e2.appspot.com",
  messagingSenderId: "188233269474",
  appId: "1:188233269474:web:8684bdca36188f6ec41ebb",
  measurementId: "G-EJ1HG952JQ",
};
firebase.initializeApp(firebaseConfig);
var storage = firebase.storage();
export default storage;
