import React,{useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import MyButton from '../MyButton';
import SelectBox from '../SelectBox';

function FetchQiuz() {
    const [categories,setCategories] = useState([]);
    const [category,setCategory] = useState("any");
    const [difficulty,setDifficulty] = useState("any");
    const [numberOfQuestion,setNumberOfQuestion] = useState("5");
    const [error,setError] = useState("");
    const navigate  = useNavigate();

    const [difficulties , setDifficulties] = useState([
        {id : 1 , value : "any" , title : "any difficulty"},
        {id : 2 , value : "easy" , title : "easy"},
        {id : 3 , value : "medium" , title : "medium"},
        {id : 4 , value : "hard" , title : "hard"}
    ]);

    useEffect(() => {
        getCategories()
    },[])

    async function getCategories() {
        const response = await fetch("https://opentdb.com/api_category.php");
        const data = await response.json();
        const copyCategories = [];
        copyCategories.push({id : 0 , value : "any" , title : "any category"});
        data.trivia_categories.forEach(category => {
            copyCategories.push({id : category.id , value : category.id , title : category.name})
            // console.log(copyCategories);
        })
        setCategories(copyCategories);
        setDifficulties(difficulties)
    }

    function getApi (){
        const query_category = category === "any" ? " " : `&category=${category}`;
        const query_difficulty = difficulty === "any" ? " " : `&difficulty=${difficulty}`;
        return `https://opentdb.com/api.php?amount=${numberOfQuestion}&type=multiple${query_category}${query_difficulty}`
    }

    async function startQuiz() {
        if(+numberOfQuestion > 0 && numberOfQuestion < 50){
            const response = await fetch(getApi());
            const data = await response.json();
            // console.log(data);
            const allQuestion = data.results;
            navigate("/quiz", { state: {allQuestion, numberOfQuestion } });
        }else{
            setError("Please select number of question between 1 and 50")
        }
            
    }
      
  return (
    <>
      <div className="flex items-center justify-center h-full">
        <div className="flex flex-col gap-5 w-80 rounded-lg bg-white p-5">
          <h1 className="font-bold text-2xl text-[#122444]">Setup Quiz</h1>
          <div className="flex flex-col gap-2">
            <label htmlFor="numberOfQuestion">Number Of Questions</label>
            <input
              type="number"
              onChange={(e) => setNumberOfQuestion(e.target.value)}
              value={numberOfQuestion}
              name="numberOfQuestion"
              className="bg-[#F1F4FB] px-1 hover:cursor-pointer"
            />
          </div>
          <SelectBox
            name="Category"
            onChange={(e) => setCategory(e.target.value)}
            options={categories}
            value={category}
          />
          <SelectBox
            name="difficulty"
            onChange={(e) => setDifficulty(e.target.value)}
            options={difficulties}
            value={difficulty}
          />
          <MyButton onClick={startQuiz} title="Start" className="mt-2" />
          <div className="text-center text-red-500">{error}</div>
        </div>
      </div>
    </>
  );
}


export default FetchQiuz