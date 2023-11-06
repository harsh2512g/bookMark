import React, { useState } from 'react'

function CustomDropdown({
  text,
  options,
  selectedOption,
  setSelectedOption,
  register,
  setValue,
}) {
  const [showDropdown, setShowDropdown] = useState(false)

  const handleOptionClick = (option) => {
    console.log({ option })
    setSelectedOption(option)
    setShowDropdown(false) // Close the dropdown after selecting an option (you can adjust this behavior)
    // register(text, { value: option, required: true })
    setValue(text, option)
  }

  return (
    <div style={{ width: '100%' }} className="max-w-7xl">
      <div
        onClick={() => setShowDropdown(!showDropdown)}
        style={{
          border: '1px solid #ccc',
          padding: '8px',
          cursor: 'pointer',
          width: '100%',
          borderRadius: 8,
        }}
        className="text-zinc-500 text-sm font-normal"
      >
        {selectedOption || 'Select '}
      </div>
      {showDropdown && (
        <div
          style={{ position: '', border: '1px solid #ccc', width: '100%' }}
          className="max-w-7xl rounded-lg mt-2 cursor-pointer"
        >
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => handleOptionClick(option)}
              style={{
                padding: '8px',
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                boxSizing: 'border-box',
              }}
              className="text-zinc-800 text-sm font-normal"
            >
              <div
                style={{
                  width: '16px',
                  height: '16px',
                  borderRadius: '50%',
                  border: '1px solid gray',
                  marginRight: '8px',
                  backgroundColor:
                    selectedOption === option ? '#128848' : '#fff',
                }}
              ></div>
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default CustomDropdown
