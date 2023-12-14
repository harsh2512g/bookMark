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
  apiKey: 'AIzaSyBTZDGUCWhamW-kx1kUOcWi3ss6OEeoQL8',
  authDomain: 'kirana-3a648.firebaseapp.com',
  projectId: 'kirana-3a648',
  storageBucket: 'kirana-3a648.appspot.com',
  messagingSenderId: '1054838536116',
  appId: '1:1054838536116:web:e21e1d505851bb609f24e1',
  measurementId: 'G-26FYYVH0WE',
}

export const firebase = initializeApp(firebaseConfig)
export const auth = getAuth(firebase)
