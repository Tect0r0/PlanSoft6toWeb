import firebase from "firebase-admin";
import { getFirestore } from "firebase-admin/firestore";

// Parse the FIREBASE_KEY env variable
const serviceAccount = JSON.parse(process.env.FIREBASE_KEY);

const app = firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
});

const db = getFirestore(app);

export default db;
