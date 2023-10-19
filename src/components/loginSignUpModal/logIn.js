import React from 'react'
import Button from '../Common/Button'
import GoogleSignIn from '../Common/GoogleSignIn'

const LogIn = () => {
  return (
    <div className="text-center">
      {' '}
      <input
        id="orgName"
        name="orgName"
        type="orgName"
        autoComplete="orgName"
        placeholder="Email"
        required
        className=" w-[358px] py-3 outline-none border border-stone-300 rounded-xl px-4 text-sm"
        // onChange={(e) => setOrgName(e.target.value)}
      />
      <input
        id="orgName"
        name="orgName"
        type="orgName"
        autoComplete="orgName"
        placeholder="Password"
        required
        className="mt-4 w-[358px] py-3 outline-none border border-stone-300 rounded-xl px-4 text-sm"
        // onChange={(e) => setOrgName(e.target.value)}
      />
      <Button text={'Login'} />
      <GoogleSignIn text={'Sign in with Google'} />
    </div>
  )
}

export default LogIn
