import React from 'react'

const EmailInvitation = () => {
  return (
    <>
      <div className="text-center text-zinc-800 text-sm font-normal mt-10">
        We sent you an email with a verification link. Click the link to finish
        creating your account.
      </div>
      <div
        className="text-center text-[#6C6C6C] text-sm mt-4
      "
      >
        Didn’t receive a link?
      </div>
      <div className="text-center text-green-700 text-sm mt-4 font-bold">
        Resend
      </div>
    </>
  )
}

export default EmailInvitation
