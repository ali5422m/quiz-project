import React,{useState,useEffect} from 'react'
import ShowModal from './../ShowModal/index';
import PageQuiz from './../PageQuiz/index';
import {useLocation} from 'react-router-dom';

function Quiz() {
    const [allQuestion,setAllQuestion] = useState([]);
    const [question,setQuestion] = useState(0);
    const [numberOfQuestion, setnumberOfQuestion] = useState(0)
    const [correct,setCorrect] = useState(0);
    const [showResult,setShowResult] = useState(false);
    const location = useLocation();
    const {state} = location;

    useEffect(() => {
        setAllQuestion(state.allQuestion);
        setnumberOfQuestion(state.numberOfQuestion);
        setQuestion(0);
    },[])

    const selectAnswer = (answer) => {
        const questionResult = allQuestion[question + 1];
        if(answer === allQuestion[question].correct_answer){
            setCorrect(correct + 1);
        }
        questionResult ? setQuestion(question + 1) : setShowResult(true);
    }
  return (
    <>
      <div className="w-full h-full">
        <PageQuiz
          selectAnswer={selectAnswer}
          numberOfQuestion={numberOfQuestion}
          correct={correct}
          title={allQuestion[question]?.question}
          answers={allQuestion[question]?.incorrect_answers
            ?.concat(allQuestion[question]?.correct_answer)
            .sort()}
        />
      </div>
      {showResult && <ShowModal answer={(correct / +numberOfQuestion) * 100} />}
    </>
  );
}

export default Quiz