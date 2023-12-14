import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { auth, firebase } from './app'
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
import db from './firebaseDB'

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

export async function firebaseAddDoc(data) {
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

export async function firebaseAddOrderDetails(data, id) {
  console.log({ data })
  try {
    const res = await setDoc(doc(firestore, 'orders', `${id}`), data)
    return true
  } catch (error) {
    console.log('error 222 utilss: ', error)
    return false
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

export async function firebaseUpdateCartDoc(collectionName, id, updatedData) {
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
    console.error('firebaseUpdateCartDoc error:', error.message)
    return false // returning false instead of null for consistency with the true return value
  }
}

export async function firebaseUpdateBookMarkDoc(
  collectionName,
  id,
  updatedData,
) {
  try {
    // Get a reference to the specific document by its ID
    const docRef = doc(firestore, collectionName, id)

    // Fetch the document to check if it exists
    const docSnap = await getDoc(docRef)
    if (!docSnap.exists()) {
      throw new Error('No document with the given ID found')
    }

    const currentBookMarks = docSnap.data().bookMark || []

    if (currentBookMarks.includes(updatedData)) {
      // If updatedData is already in the bookMark array, remove it
      const index = currentBookMarks.indexOf(updatedData)
      if (index > -1) {
        currentBookMarks.splice(index, 1)
      }
    } else {
      // If updatedData is not in the bookMark array, add it
      currentBookMarks.push(updatedData)
    }

    console.log({ updatedData })

    // Update the document with the modified array
    const updateObj = { bookMark: currentBookMarks }
    await updateDoc(docRef, updateObj)

    return currentBookMarks
  } catch (error) {
    console.error('firebaseUpdateBookMarkDoc error:', error.message)
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

export async function uploadImages(files) {
  console.log({ files })

  const uploadPromises = files?.map((file) => {
    const storage = getStorage(firebase)
    const storageRef = ref(storage, 'books/' + file?.file?.name)
    return uploadBytes(storageRef, file?.file).then((snapshot) =>
      getDownloadURL(snapshot.ref),
    )
  })
  const imageUrls = await Promise.all(uploadPromises)
  console.log({ imageUrls })
  return imageUrls
}

export async function initiateOrGetConversation(buyerId, sellerId, orderId) {
  // Create a compound field for the participant pair
  const participantPair = [buyerId, sellerId].sort().join('_')
  console.log({ participantPair })
  // Check if a conversation already exists for this pair
  const conversationsRef = collection(db, 'conversations')
  const q = query(
    conversationsRef,
    where('participantPair', '==', participantPair),
  )

  const existingConvo = await getDocs(q)

  let conversationId1
  if (existingConvo.empty) {
    // If conversation doesn't exist, create a new one
    const newConvoRef = await addDoc(conversationsRef, {
      participants: [buyerId, sellerId],
      participantPair: participantPair,
      orderId,
    })
    conversationId1 = newConvoRef.id
  } else {
    conversationId1 = existingConvo.docs[0].id
  }
}
