import React,{useState} from 'react'
import Answers from '../Answers/index';
import MyButton from '../MyButton/index';


function PageQuiz({selectAnswer,numberOfQuestion,correct = 0 , title = "test" , answers = []}) {
    const [your_answer,setYour_answer] = useState("");
    const setAnswerValue = (value) => {
        setYour_answer(value);
    }
    function encode(value){
      return value
        .replace(/&#039;/g, "'")
        .replace(/&quot;/g, '"')
        .replace(/&amp;/g, "&")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        
      
    }
  return (
    <div className="flex flex-col w-full min-h-full rounded p-4 bg-#F1F4FD">
      <div className="bg-white w-10/12 h-5/6 m-auto">
        <h6 className="text-green-500 flex flex-row-reverse p-10">
          Correct Answers {correct}/{numberOfQuestion}
        </h6>
        <div className="flex flex-1 flex-col gap-4 ">
          <h1 className="text-center font-bold text-2xl w-9/12 m-auto">{encode(title)}</h1>
          <div className="font-medium text-lg flex flex-col gap-2 justify-center items-center w-3/6 m-auto ">
            {answers.map((answer) => (
              <Answers
                key={answer}
                answer={encode(answer)}
                your_answer={your_answer}
                setAnswerValue={setAnswerValue}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-row-reverse ">
          <MyButton
            onClick={() => selectAnswer(your_answer)}
            title="Next Questions"
            className=" flex flex-row-reverse m-10 w-auto sm:px-24 whitespace-nowrap "
          />
        </div>
      </div>
    </div>
  );
}

export default PageQuiz