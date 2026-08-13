import { initializeApp, getApps, getApp } from 'firebase/app';
import { 
  getFirestore, 
  collection, 
  onSnapshot, 
  addDoc, 
  serverTimestamp, 
  query, 
  orderBy 
} from 'firebase/firestore';
import { 
  getDatabase, 
  ref, 
  onValue, 
  push, 
  set 
} from 'firebase/database';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "",
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL || `https://${import.meta.env.VITE_FIREBASE_PROJECT_ID || 'zappledigital-db'}-default-rtdb.firebaseio.com`
};

let app;
let db = null;
let rtdb = null;
let useFirebase = false;

if (firebaseConfig.apiKey && firebaseConfig.apiKey !== "YOUR_API_KEY") {
  try {
    app = getApps().length ? getApp() : initializeApp(firebaseConfig);
    db = getFirestore(app);
    rtdb = getDatabase(app);
    useFirebase = true;
  } catch (error) {
    console.warn("Firebase initialization failed, falling back to LocalStorage:", error);
    useFirebase = false;
  }
}

export { 
  db, 
  rtdb,
  useFirebase, 
  collection, 
  onSnapshot, 
  addDoc, 
  serverTimestamp, 
  query, 
  orderBy,
  ref,
  onValue,
  push,
  set
};
