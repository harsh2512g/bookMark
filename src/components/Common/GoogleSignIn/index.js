import React from 'react'

const GoogleSignIn = ({ text, onClick }) => {
  return (
    <div className="mt-4 w-[360px] cursor-pointer mx-auto" onClick={onClick}>
      <span className="inline-flex rounded-xl justify-center w-full px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300  shadow-sm hover:bg-gray-50">
        <svg
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_249_2891)">
            <path
              d="M20.3052 10.2303C20.3052 9.55057 20.2501 8.86713 20.1325 8.19838H10.7002V12.0492H16.1016C15.8775 13.2912 15.1573 14.3898 14.1027 15.088V17.5866H17.3252C19.2176 15.8449 20.3052 13.2728 20.3052 10.2303Z"
              fill="#4285F4"
            ></path>
            <path
              d="M10.6999 20.0007C13.397 20.0007 15.6714 19.1151 17.3286 17.5866L14.1061 15.088C13.2096 15.6979 12.0521 16.0433 10.7036 16.0433C8.09474 16.0433 5.88272 14.2833 5.08904 11.9169H1.76367V14.4927C3.46127 17.8695 6.91892 20.0007 10.6999 20.0007V20.0007Z"
              fill="#34A853"
            ></path>
            <path
              d="M5.08565 11.9169C4.66676 10.6749 4.66676 9.3301 5.08565 8.08814V5.51235H1.76395C0.345611 8.338 0.345611 11.667 1.76395 14.4927L5.08565 11.9169V11.9169Z"
              fill="#FBBC04"
            ></path>
            <path
              d="M10.6999 3.95805C12.1256 3.936 13.5035 4.47247 14.536 5.45722L17.3911 2.60218C15.5833 0.904587 13.1838 -0.0287217 10.6999 0.000673888C6.91892 0.000673888 3.46127 2.13185 1.76367 5.51234L5.08537 8.08813C5.87538 5.71811 8.09107 3.95805 10.6999 3.95805V3.95805Z"
              fill="#EA4335"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_249_2891">
              <rect
                width="20"
                height="20"
                fill="white"
                transform="translate(0.5)"
              ></rect>
            </clipPath>
          </defs>
        </svg>{' '}
        <button
          type="button"
          //   onClick={() => handleGoogleSignIn()}
          className="font-semibold  text-md text-midnight whitespace-nowrap"
        >
          &nbsp;&nbsp;{text}
        </button>
      </span>
    </div>
  )
}

export default GoogleSignIn
