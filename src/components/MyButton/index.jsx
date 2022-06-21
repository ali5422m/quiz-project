import React from 'react'

function MyButton({title,onClick,className=""}) {
    const generate = () => {
        return `${className} rounded font-semibold pb-[revert] bg-yellow-500 flex justify-center items-center `;
    }
  return (
    <button onClick={onClick} className={generate()}>{title}</button>
  )
}

export default MyButton