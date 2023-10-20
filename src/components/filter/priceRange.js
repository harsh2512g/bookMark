function PriceRange() {
  return (
    <div className="mb-4">
      <label className="text-zinc-800 text-sm font-medium block mb-2 ">
        Price:
      </label>
      {/* Use a range input or a library like react-slider here */}
      <input
        type="range"
        min="0"
        max="100"
        className="w-full slider-thumb slider-track"
      />
      <div className="flex justify-between text-zinc-800 text-sm font-normal">
        <div>10$</div>
        <div>100$ +</div>
      </div>
    </div>
  )
}

export default PriceRange
