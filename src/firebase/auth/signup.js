import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  RecaptchaVerifier,
  signInWithPopup,
} from 'firebase/auth'
import { toast } from 'react-toastify'
import { auth, firebase } from '../app'
import { firestore } from '../firestore'
import { doc, getDoc, setDoc } from 'firebase/firestore'

export async function firebasesignUp({ username, email, password }) {
  console.log({ username, email, password })
  const auth = getAuth()
  try {
    const userInfos = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    ).then(async (result) => {
      //   await updateProfile(result.user, {
      //     displayName: username,
      //   })
      //await CreateNovuSubscriber(result.user.uid, email, username)
      //await SendNotification(result.user.uid, 'Account created successfully.')
      return {
        accessToken: result.user.accessToken,
        uid: result.user.uid,
        displayName: username,
        ...result.user.reloadUserInfo,
      }
    })
    console.log({ userInfos })
    return { ...userInfos }
  } catch (error) {
    const errorCode = error?.code
    //let errorMessage =
    //errorMessageCustom[errorCode] || error?.message || 'Something went wrong'
    toast.error('Something went wrong', {
      position: 'top-left',
      autoClose: 10000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    })
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

export async function firebaseLoginWithGoogle({ setVerifyID }) {
  const auth = getAuth()
  const firebaseGoogleProvider = new GoogleAuthProvider()
  firebaseGoogleProvider.addScope('email')
  firebaseGoogleProvider.addScope('profile')

  const userInfo = await signInWithPopup(auth, firebaseGoogleProvider)
    .then(async (result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result)
      const token = credential?.accessToken
      const user = result.user

      await updateProfile(user, {
        displayName: user.displayName,
      })

      let isExist = await firebaseGetDoc('users', user.uid)
      console.log({ isExist })
      if (!isExist) {
        let updatedUserData = {
          allowPushNotifications: true,
          accessToken: user?.accessToken,
          uid: user?.uid,
          displayName: user?.displayName,
          email: user?.email,
          emailVerified: user?.emailVerified,
          providerUserInfo: user?.providerData,
          photoURL: user?.photoURL,
        }
        console.log({ updatedUserData })
        await firebaseAddDoc(updatedUserData)
        let prepareParams = {
          uid: user?.uid,
          email: user?.email,
          name: user?.displayName,
        }

        // await createCustomer(user, prepareParams)

        // await CreateNovuSubscriber(user.uid, user.email, user.displayName)
        // await SendNotification(user.uid, 'Account created successfully.')
      }

      // The signed-in user info.
      return { credential, token, user }
    })
    .catch(async (error) => {
      console.log(error)
      if (error.code == 'auth/wrong-password') {
        const errorMessage = error.message
      }
      const errorCode = error?.code
      const errorMessage = error?.message
      // The email of the user's account used.
      const email = error?.email
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error)
      console.error({ errorCode, errorMessage, email, credential })
      return { error }
    })
  return userInfo
}
