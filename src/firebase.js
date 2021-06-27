import firebase from "firebase/app";
// import "firebase/auth";
// import "firebase/firestore";
// import "firebase/storage";
import "firebase/functions";

// firebase init - add your own config here
const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  databaseURL: process.env.VUE_APP_FIREBASE_DB_URL,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
};
firebase.initializeApp(firebaseConfig);

// utils
var functions = firebase.functions();
// const db = firebase.firestore()
// const auth = firebase.auth()
// const storage = firebase.storage()

// collection references
// const userCollection = db.collection('users')

// export utils/refs
export { functions /*db, auth, userCollection, storage*/ };
