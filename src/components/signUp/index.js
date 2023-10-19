'use client'
import React, { useState } from 'react'
// import Button from '../Common/Button'
// import GoogleSignIn from '../Common/GoogleSignIn'
// import EmailInvitation from './emailinvitation'
import { firebaseLoginWithGoogle, firebasesignUp } from '@/firebase/auth/signup'
import firebaseAddDoc from '@/firebase/utils'
import { toast } from 'react-toastify'

import { useRouter } from 'next/navigation'
import EmailInvitation from '../loginSignUpModal/emailinvitation'
import Button from '../Common/Button'
import GoogleSignIn from '../Common/GoogleSignIn'
import Cookies from 'js-cookie'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '@/firebase/app'
import { useUidContext } from '@/contexts/uidContext'
const SignUp = ({ onMakeAccount, setOnMakeAccount }) => {
  const router = useRouter()
  const [userDetails, setUserDetails] = useState({
    email: '',
    userName: '',
    password: '',
  })
  const user = useAuthState(auth)
  const [verifyId, setVerifyID] = useState(null)
  const { uid, setUid } = useUidContext()
  const handleSignUp = async () => {
    console.log({ userDetails })
    try {
      // setIsPending(true)
      const user = await firebasesignUp({
        username: userDetails?.userName,
        email: userDetails?.email,
        password: userDetails?.password,
      })

      console.log({ user })
      let updatedUserData = { ...user, allowPushNotifications: true }
      delete updatedUserData.accessToken
      await firebaseAddDoc(updatedUserData)
      let prepareParams = {
        uid: user?.uid,
        email: userDetails?.email,
        name: userDetails?.userName,
      }
      console.log('after firebase add doc')

      if (user && !user?.error) {
        Cookies.set('bookMarkUid', user?.uid)
        router.push('/')

        toast.success('User Registered Successfully', {
          position: 'bottom-left',
          autoClose: 10000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        })
      } else {
        toast.error(user.error, {
          position: 'bottom-left',
          autoClose: 10000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        })
      }
    } catch (e) {
      //   setIsPending(false)
      console.log({ e })
    }
  }

  const handleGoogleSignUp = async () => {
    const { user } = await firebaseLoginWithGoogle({
      setVerifyID,
    })

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
    } else {
      toast.error(errorMessage, {
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
      <div className="  p-10 max-w-7xl py-10 sm:py-28 lg:py-30  mt-[-9%] xl:mt-[4%] bg-center bg-no-repeat w-full mx-auto">
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
              <input
                id="orgName"
                name="orgName"
                type="orgName"
                autoComplete="orgName"
                placeholder="User Password"
                required
                className=" mt-4 w-[358px] py-3 outline-none border border-stone-300 rounded-xl px-4 text-sm"
                onChange={(e) =>
                  setUserDetails((prev) => ({
                    ...prev,
                    password: e.target.value,
                  }))
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
