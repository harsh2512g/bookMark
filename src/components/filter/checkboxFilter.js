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

function CheckboxFilter({
  filterValues,
  setFilterValues,
  bookCondition,
  setBookCondition,
}) {
  console.log(filterValues, 'filter humain')

  const handleChecks = (e, label) => {
    if (e.target.checked) {
      // If checked, add the label to the array
      setBookCondition((prevState) => [...prevState, label.name])
    } else {
      // If unchecked, remove the label from the array
      setBookCondition((prevState) =>
        prevState.filter((condition) => condition !== label.name),
      )
    }
  }
  console.log({ bookCondition })
  return (
    <>
      <div className="text-zinc-800 text-sm font-medium">Book Condition:</div>
      {checkboxLabels.map((d, i) => (
        <div className="text-zinc-800 text-sm font-medium mb-2 ">
          <input
            type="checkbox"
            id={i}
            className="rounded-sm transform scale-100 mr-2 mb-3 mt-3"
            onChange={(e) => {
              handleChecks(e, d)
            }}
          />
          <label htmlFor={i} className=" text-zinc-800 text-sm font-normal">
            {d?.name}
          </label>
        </div>
      ))}
    </>
  )
}

export default CheckboxFilter
