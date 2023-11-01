import {
  collection,
  doc,
  query,
  where,
  addDoc,
  onSnapshot,
  orderBy,
  getFirestore,
} from 'firebase/firestore'
import { firebase } from './app'

const db = getFirestore(firebase)

export default db
