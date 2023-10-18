import React, { useState } from 'react'

function RatingStars() {
  const [selectedRating, setSelectedRating] = useState(0)

  const handleStarClick = (rating) => {
    setSelectedRating(rating)
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
              star <= selectedRating ? 'text-green-500' : 'text-gray-400'
            }`}
          >
            {star <= selectedRating ? '★' : '☆'}
          </span>
        ))}
      </div>
    </div>
  )
}

export default RatingStars
