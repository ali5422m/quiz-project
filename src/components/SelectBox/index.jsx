import React from 'react'

function SelectBox({name,options}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name}>{name}</label>
      <select
        name={name}
        id={name}
        className="cursor-pointer p-1 bg-[#F1F4FB]"
      >
        {options.map((option) => (
          <option key={option.id} value={option.value}>
            {option.title}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectBox