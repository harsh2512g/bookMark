import React from 'react'

const Button = ({ text, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={` bg-green-700 mt-4
       cursor-pointer w-[350px] h-[47px] px-7 py-3 rounded-xl justify-center items-center gap-2.5 inline-flex`}
    >
      <div
        className={`  text-white 
        text-lg font-bold flex items-center`}
      >
        <div>{text}</div>
      </div>
    </div>
  )
}

export default Button
