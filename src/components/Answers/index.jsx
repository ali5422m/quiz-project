import React,{useRef} from 'react'

function Answers({answer,setAnswerValue,your_answer}) {
  const pasokh = useRef(null);
  const generate = () =>{
    return `${
      answer === your_answer
        ? "bg-blue-500 text-white"
        : "bg-[#86C5FD] text-black"
    } w-full rounded text-center  py-1 m-3 cursor-pointer `;
  }
  return (
    <div onClick={()=>setAnswerValue(pasokh.current.innerText)} className={generate()} >
    <h4 ref={pasokh}>{answer}</h4>
    </div>
  )
}

export default Answers