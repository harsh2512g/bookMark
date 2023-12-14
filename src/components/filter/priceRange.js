import { useState } from 'react'

function PriceRange({ filterValues, setFilterValues }) {
  return (
    <div className="mb-4 relative">
      <label className="text-zinc-800 text-sm font-medium block mb-2 ">
        Price:
      </label>
      {/* Use a range input or a library like react-slider here */}
      <input
        type="range"
        min="0"
        max="100"
        className="w-full slider-thumb slider-track"
        onChange={(e) =>
          setFilterValues((prev) => ({
            ...prev,
            range: e.target.value,
          }))
        }
        value={filterValues?.range}
      />
      <span
        className="absolute text-xs bg-white border border-gray-300 rounded px-2 py-0.5 transform -translate-y-1/2"
        style={{
          left: `calc(${filterValues?.range}% - 12px)`,
          bottom: '-20px',
        }}
      >
        ${filterValues?.range}
      </span>
      <div className="flex justify-between text-zinc-800 text-sm font-normal">
        <div>10$</div>
        <div>100$ +</div>
      </div>
    </div>
  )
}

export default PriceRange
