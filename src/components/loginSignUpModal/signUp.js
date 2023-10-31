import React, { useState } from 'react'
import Button from '../Common/Button'
import GoogleSignIn from '../Common/GoogleSignIn'
import EmailInvitation from './emailinvitation'
import { firebasesignUp } from '@/firebase/auth/signup'

import { toast } from 'react-toastify'

import { useRouter } from 'next/navigation'
import firebaseAddDoc from '@/firebase/utils'

const SignUp = ({ onMakeAccount, setOnMakeAccount }) => {
  const router = useRouter()
  const [userDetails, setUserDetails] = useState({
    email: '',
    userName: '',
    password: '',
  })

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
  return (
    <>
      {onMakeAccount ? (
        <EmailInvitation />
      ) : (
        <div className="text-center">
          {' '}
          <input
            id="orgName"
            name="orgName"
            type="orgName"
            autoComplete="orgName"
            placeholder="User Name"
            required
            className=" w-[358px] py-3 outline-none border border-stone-300 rounded-xl px-4 text-sm"
            onChange={(e) =>
              setUserDetails((prev) => ({ ...prev, userName: e.target.value }))
            }
          />
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
          <input
            id="orgName"
            name="orgName"
            type="orgName"
            autoComplete="orgName"
            placeholder="User Password"
            required
            className=" w-[358px] py-3 outline-none border border-stone-300 rounded-xl px-4 text-sm"
            onChange={(e) =>
              setUserDetails((prev) => ({ ...prev, password: e.target.value }))
            }
          />
          <Button onClick={handleSignUp} text={'Make account'} />
          <GoogleSignIn text={'Sign up with Google'} />
        </div>
      )}
    </>
  )
}

export default SignUp
