import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyByP2JOWO0rdaXMKIGzkk6Iw04oSgrMZIc",
  authDomain: "nueva-db-tot.firebaseapp.com",
  projectId: "nueva-db-tot",
  storageBucket: "Base-thisthat.appspot.com",
  messagingSenderId: "1038531974242",
  appId: "1:1038531974242:web:5e93373e7175059bcc2d3b"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export {db};