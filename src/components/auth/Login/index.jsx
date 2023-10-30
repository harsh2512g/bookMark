'use client'
import React, { useState } from 'react'
import { signInWithEmail } from '@/firebase/auth'
import { useRouter } from 'next/navigation'
import GoogleSignIn from '@/components/Common/GoogleSignIn'
import Button from '@/components/Common/Button'
import { firebaseLoginWithGoogle } from '@/firebase/auth/signup'
import { setUid } from '@/redux/authSlice'
import { useDispatch } from 'react-redux'
import Cookies from 'js-cookie'
import { toast } from 'react-toastify'

export default function LoginComponent() {
  const router = useRouter()
  const [userDetails, setUserDetails] = useState({
    email: '',
    password: '',
  })
  const { push } = useRouter()
  const [isChecked, setIsChecked] = useState(true)
  const [isLoading, setIsLoading] = useState(false)

  const dispatch = useDispatch()

  const handleEmailSignIn = async (e) => {
    try {
      e.preventDefault()
      setIsLoading(true)
      await signInWithEmail(userDetails, isChecked)
      push('/')
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)

      let errorMessage = ''

      switch (error.code) {
        case 'auth/invalid-email':
          errorMessage = 'Invalid email address.'
          break
        case 'auth/wrong-password':
          errorMessage = 'Incorrect password.'
          break
        case 'auth/user-not-found':
          errorMessage = 'User not found.'
          break
        case 'auth/network-request-failed':
          errorMessage =
            'Network error. Please check your internet connection and try again.'
          break
        default:
          errorMessage = 'An error occurred during sign in. Please try again.'
          break
      }

      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: errorMessage,
      })
    }
  }

  const handleGoogleSignIn = async (e) => {
    e.preventDefault()
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
          Login
        </div>
        {
          <div className="mx-auto text-center flex flex-col justify-center">
            {' '}
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
              <Button onClick={handleEmailSignIn} text={'Login'} />
            </div>
            <GoogleSignIn
              text={'Sign in with Google'}
              onClick={handleGoogleSignIn}
            />
          </div>
        }
      </div>
    </>
  )
}
