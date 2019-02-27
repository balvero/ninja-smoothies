import firebase from "firebase";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBynABTrZoUcKFBfms19yRKM4he8Thei4g",
  authDomain: "ninja-smoothies-2f781.firebaseapp.com",
  databaseURL: "https://ninja-smoothies-2f781.firebaseio.com",
  projectId: "ninja-smoothies-2f781",
  storageBucket: "ninja-smoothies-2f781.appspot.com",
  messagingSenderId: "1005142120933"
};
const firebaseApp = firebase.initializeApp(config);
// firebaseApp.firestore().settings({ timestampsInSnapshots: true });

//export firestore database
export default firebaseApp.firestore();
