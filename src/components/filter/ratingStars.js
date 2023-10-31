import React, { useState } from 'react'

function RatingStars({ filterValues, setFilterValues }) {
  const [selectedRating, setSelectedRating] = useState(0)

  const handleStarClick = (rating) => {
    setFilterValues((prev) => ({
      ...prev,
      rating: rating,
    }))
  }

  return (
    <div className="mb-4">
      <label className="text-zinc-800 text-sm font-medium">
        Seller rating:
      </label>
      <div className="text-zinc-800 text-sm font-normal mb-3 mt-4">
        Only show listings from sellers rated:
      </div>
      <div className="text-2xl">
        {[1, 2, 3, 4, 5].map((star, index) => (
          <span
            key={index}
            onClick={() => handleStarClick(star)}
            className={` cursor-pointer ${
              star <= filterValues?.rating ? 'text-green-500' : 'text-gray-400'
            }`}
          >
            {star <= filterValues?.rating ? '★' : '☆'}
          </span>
        ))}
      </div>
    </div>
  )
}

export default RatingStars
