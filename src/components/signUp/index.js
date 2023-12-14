'use client'
import React, { useEffect, useState } from 'react'
// import Button from '../Common/Button'
// import GoogleSignIn from '../Common/GoogleSignIn'
// import EmailInvitation from './emailinvitation'
import { firebaseLoginWithGoogle } from '@/firebase/auth/signup'
import { toast } from 'react-toastify'

import { useRouter } from 'next/navigation'
import EmailInvitation from '../loginSignUpModal/emailinvitation'
import Button from '../Common/Button'
import GoogleSignIn from '../Common/GoogleSignIn'
import Cookies from 'js-cookie'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, firebase } from '@/firebase/app'
import { useUidContext } from '@/contexts/uidContext'
import { useDispatch, useSelector } from 'react-redux'
import { store } from '@/redux/store'
import { setUid } from '@/redux/authSlice'
import { sendSignInLinkToEmail } from 'firebase/auth'
import { useAuth } from '@/contexts/authContext'

const SignUp = () => {
  const [onMakeAccount, setOnMakeAccount] = useState(false)
  const router = useRouter()
  const dispatch = useDispatch()
  const [message, setMessage] = useState('')
  const [userDetails, setUserDetails] = useState({
    email: '',
    userName: '',
  })
 
  const { user } = useAuth()
  const [verifyId, setVerifyID] = useState(null)
  
  console.log({ user })
  useEffect(() => {
    if (user) {
      Cookies.set('bookMarkUid', user?.uid)
      router.push('/')
    }
  }, [user])
  const handleSignUp = async () => {
    if (!userDetails?.email || !userDetails?.userName) {
      toast.error('Please Fill all fields', {
        position: 'bottom-left',
        autoClose: 10000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      })
      return
    }
    const actionCodeSettings = {
      url: 'http://localhost:3000/confirmSignUp',
      handleCodeInApp: true,
    }

    try {
      await sendSignInLinkToEmail(auth, userDetails?.email, actionCodeSettings)
      setMessage(
        `Email sent to ${userDetails?.email}. Please check your inbox.`,
      )
      setOnMakeAccount(true)
      localStorage.setItem('emailForSignIn', userDetails?.email)
    } catch (error) {
      setMessage(`Error: ${error.message}`)
    }
  }
  console.log({ message })
  const handleGoogleSignUp = async () => {
    const { user } = await firebaseLoginWithGoogle()
    dispatch(setUid(user?.uid))
    if (user) {
      Cookies.set('bookMarkUid', user?.uid)
      setUid(user?.uid)
      router.push('/')

      toast.success('User Logged in Successfully', {
        position: 'bottom-left',
        autoClose: 10000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      })
    }
    console.log({ user })
  }
  return (
    <>
      <div className="min-h-screen  flex flex-col items-center justify-center mx-auto">
        <div className="text-center mb-8 font-bold text-green-800 text-3xl">
          Sign Up
        </div>
        {onMakeAccount ? (
          <EmailInvitation />
        ) : (
          <div className="mx-auto text-center flex flex-col justify-center">
            {' '}
            <div>
              <input
                id="orgName"
                name="orgName"
                type="orgName"
                autoComplete="orgName"
                placeholder="User Name"
                required
                className=" w-[358px] py-3 outline-none border border-stone-300 rounded-xl px-4 text-sm"
                onChange={(e) =>
                  setUserDetails((prev) => ({
                    ...prev,
                    userName: e.target.value,
                  }))
                }
              />
            </div>
            <div>
              <input
                id="orgName"
                name="orgName"
                type="orgName"
                autoComplete="orgName"
                placeholder="User Email"
                required
                className="mt-4 w-[358px] py-3 outline-none border border-stone-300 rounded-xl px-4 text-sm"
                onChange={(e) =>
                  setUserDetails((prev) => ({ ...prev, email: e.target.value }))
                }
              />
            </div>
            <div>
              <Button onClick={handleSignUp} text={'Make account'} />
            </div>
            <GoogleSignIn
              text={'Sign up with Google'}
              onClick={handleGoogleSignUp}
            />
          </div>
        )}
      </div>
    </>
  )
}

export default SignUp
