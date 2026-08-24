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
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL || "https://zappledigital-db-default-rtdb.asia-southeast1.firebasedatabase.app"
};

let app;
let db = null;
let rtdb = null;
let useFirebase = false;

if (firebaseConfig.apiKey && firebaseConfig.apiKey !== "YOUR_API_KEY") {
  try {
    app = getApps().length ? getApp() : initializeApp(firebaseConfig);

    // 1. Initialize Realtime Database (RTDB) independently with databaseURL
    try {
      rtdb = getDatabase(app, firebaseConfig.databaseURL);
      useFirebase = true;
      console.log("🔥 Firebase Realtime Database initialized successfully at:", firebaseConfig.databaseURL);
    } catch (rtdbErr) {
      console.warn("⚠️ Realtime Database init warning:", rtdbErr);
    }

    // 2. Initialize Firestore independently if enabled
    try {
      db = getFirestore(app);
      useFirebase = true;
    } catch (fsErr) {
      console.info("ℹ️ Firestore database not created or disabled on project.");
    }

  } catch (error) {
    console.warn("⚠️ Firebase app initialization failed:", error);
    useFirebase = false;
  }
} else {
  console.info("ℹ️ Firebase credentials missing. Running in LocalStorage fallback mode.");
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
