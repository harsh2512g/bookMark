const checkboxLabels = [
  {
    name: 'Brand New',
  },
  {
    name: 'Like New (Gently used, no issues)',
  },
  {
    name: 'Fair (Some signs of usage)',
  },
  {
    name: 'Include listings outside of my campus',
  },
]

function CheckboxFilter({ label }) {
  return (
    <>
      <div className="text-zinc-800 text-sm font-medium">Book Condition:</div>
      {checkboxLabels.map((d) => (
        <div className="text-zinc-800 text-sm font-medium mb-2 ">
          <input
            type="checkbox"
            id={label}
            className="rounded-sm transform scale-100 mr-2 mb-3 mt-3"
          />
          <label htmlFor={label} className=" text-zinc-800 text-sm font-normal">
            {d?.name}
          </label>
        </div>
      ))}
    </>
  )
}

export default CheckboxFilter
