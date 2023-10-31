// pages/confirmSignUp.js
'use client'
import React, { useEffect, useState } from 'react'
import {
  getAdditionalUserInfo,
  isSignInWithEmailLink,
  signInWithEmailLink,
} from 'firebase/auth'

import { useRouter } from 'next/navigation'
import { auth } from '@/firebase/app'
import { firebaseAddDoc, firebaseGetDoc } from '@/firebase/utils'
import Cookies from 'js-cookie'
const ConfirmSignUp = () => {
  const [message, setMessage] = useState('')
  const router = useRouter()

  useEffect(() => {
    if (isSignInWithEmailLink(auth, window.location.href)) {
      let email = window.localStorage.getItem('emailForSignIn')
      if (!email) {
        // Ask the user for their email if not available
        email = window.prompt('Please provide your email for confirmation')
      }

      signInWithEmailLink(auth, email, window.location.href)
        .then(async (result) => {
          const user = result.user
          let isExist = await firebaseGetDoc('users', user.uid)

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
              cart: [],
            }
            console.log({ updatedUserData })

            await firebaseAddDoc(updatedUserData)

            // await createCustomer(user, prepareParams)

            // await CreateNovuSubscriber(user.uid, user.email, user.displayName)
            // await SendNotification(user.uid, 'Account created successfully.')
          }
          setMessage('Successfully signed up!')
          window.localStorage.removeItem('emailForSignIn')
          Cookies.set('bookMarkUid', user?.uid)
          // Redirect to home page after successful login
          router.push('/')
          // The signed-in user info.
          return { credential, token, user }
        })
        .catch((error) => {
          setMessage(`Error: ${error.message}`)
        })
    }
  }, [])

  return <div>{message}</div>
}

export default ConfirmSignUp
