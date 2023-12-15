import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import "firebase/storage";
import { getFirestore } from 'firebase/firestore'

// const apiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY
// const authDomain = process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
// const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
// const databaseURL = process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL
// const storageBucket = process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
// const messagingSenderId = process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID

const firebaseConfig = {
  apiKey: "AIzaSyANYhVfVJt1zKbvqxniyPprxqKKRQ6Zf6I",
  authDomain: "bookmark-cf8d1.firebaseapp.com",
  projectId: "bookmark-cf8d1",
  storageBucket: "bookmark-cf8d1.appspot.com",
  messagingSenderId: "496654901093",
  appId: "1:496654901093:web:fece1f4c3e06f059044b8c",
  measurementId: "G-6FCT5RRET6"
};

export const firebase = initializeApp(firebaseConfig)
export const auth = getAuth(firebase)
