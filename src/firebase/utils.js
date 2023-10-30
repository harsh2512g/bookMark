import { auth } from './app'
import { firestore } from './firestore'
import {
  addDoc,
  collection,
  doc,
  getCountFromServer,
  getDoc,
  getDocs,
  query,
  setDoc,
  Timestamp,
  updateDoc,
  deleteDoc,
  where,
  orderBy,
  startAfter,
  limit,
  runTransaction,
  arrayUnion,
  arrayRemove,
} from 'firebase/firestore'
console.log({ firestore })
const firebaseAddDoc = async (data) => {
  try {
    const res = await setDoc(
      doc(firestore, 'users', `${auth.currentUser.uid}`),
      data,
    )
    return true
  } catch (error) {
    console.log('error 222 utilss: ', error)
    return false
  }
}

export async function firebaseAddBookInCart(data, id) {
  try {
    const res = await setDoc(doc(firestore, 'cartItems', `${id}`), data)
    return true
  } catch (error) {
    console.log('error 222 utilss: ', error)
    return false
  }
}

export async function firebaseGetDoc(collectionName, id) {
  try {
    const docRef = doc(firestore, collectionName, id)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
      return docSnap.data()
    } else {
      // docSnap.data() will be undefined in this case
      console.log('No such document!')
    }
  } catch (error) {
    console.log('error', error)
  }
}

export async function firebaseGetDocs(collectionName, key, value) {
  try {
    const projectsRef = collection(firestore, collectionName)
    const queryRef = query(projectsRef, where(key, '==', value))
    const documentSnapshots = await getDocs(queryRef)
    const data = documentSnapshots.docs.map((doc) => {
      const singleData = doc.data()
      singleData.id = doc.id
      return singleData
    })
    return data
  } catch (error) {
    console.error(error.message)
  }
}

export async function firebaseUpdateDoc(collectionName, id, updatedData) {
  try {
    // Get a reference to the specific document by its ID
    const docRef = doc(firestore, collectionName, id)

    // Fetch the document to check if it exists
    const docSnap = await getDoc(docRef)
    if (!docSnap.exists()) {
      throw new Error('No document with the given ID found')
    }

    console.log({ updatedData })

    // Use the arrayUnion method to add the updatedData to the cart_id array
    const updateObj = {
      cart: arrayUnion(updatedData),
    }

    // Update the document
    await updateDoc(docRef, updateObj)

    return true
  } catch (error) {
    console.error('firebaseUpdateDoc error:', error.message)
    return false // returning false instead of null for consistency with the true return value
  }
}

export async function firebaseRemoveFromDoc(collectionName, id, updatedData) {
  try {
    // Get a reference to the specific document by its ID
    const docRef = doc(firestore, collectionName, id)

    // Fetch the document to check if it exists
    const docSnap = await getDoc(docRef)
    if (!docSnap.exists()) {
      throw new Error('No document with the given ID found')
    }

    console.log({ updatedData })

    // Use the arrayRemove method to remove the updatedData from the cart_id array
    const updateObj = {
      cart: arrayRemove(updatedData),
    }

    // Update the document
    await updateDoc(docRef, updateObj)

    return true
  } catch (error) {
    console.error('firebaseRemoveFromDoc error:', error.message)
    return false // returning false instead of null for consistency with the true return value
  }
}

export async function firebaseGetAllDoc(collectionName) {
  let arr = []
  const snapshot = await getDocs(collection(firestore, collectionName))
  snapshot.forEach((data) => {
    arr.push(data.data())
  })
  return arr
}
