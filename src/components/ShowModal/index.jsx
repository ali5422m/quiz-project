import React from 'react'
import {useNavigate} from "react-router-dom";
import MyButton from '../MyButton';


function ShowModal({answer}) {
    const navigate = useNavigate();
    const reset = () => {
        navigate("/");
    }
  return (
    <div className="absolute flex flex-col items-center justify-center top-0 bg-opacity-30 bg-black w-full h-full ">
      <div className="bg-white px-32 py-8 rounded flex flex-col justify-center items-center gap-2">
        <h1 className="font-bold text-xl tracking-wider ">Congrats</h1>
        <h5>You Answered {answer}%</h5>
        <MyButton
          onClick={reset}
          className="p-1 px-6 pb-1 mt-3 flex justify-center items-center"
          title="Play Again"
        />
      </div>
    </div>
  );
}

export default ShowModal