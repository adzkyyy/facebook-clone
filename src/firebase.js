import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC6E49oPNpUm4LZTXFW0VQs-IxB9wQztAk",
  authDomain: "facebookclone-eba7f.firebaseapp.com",
  databaseURL: "https://facebookclone-eba7f.firebaseio.com",
  projectId: "facebookclone-eba7f",
  storageBucket: "facebookclone-eba7f.appspot.com",
  messagingSenderId: "351496721680",
  appId: "1:351496721680:web:170bef186e6fd867fbc195",
  measurementId: "G-5PBRJNRTMN",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
