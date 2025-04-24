import React,{useState} from 'react'
import questions from "./constants/questions.json"
import Question from "./components/Question"
import Result from "./components/Result"
import './App.css';

function App() {
  //state contain my current question
const [currentQuestion,setCurrentQuestion]=useState(0)
//state conatin user answers
const [userAnswers,setUserAnswers]=useState([])

//keep all of the logic in App.jsx

const NextQuestion=(isCorrect)=>{
setCurrentQuestion(currentQuestion+1)
setUserAnswers([...userAnswers,isCorrect])
}

const resetQuiz=()=>{
  setCurrentQuestion(0)
  setUserAnswers([])
}

  return (
    <div className="App">
    <h1>World Quiz</h1>
    {/* Questions component*/}

{
  currentQuestion<questions.length && (
  <Question question={questions[currentQuestion]} 
onAnswerClick={NextQuestion}/>
)}

        {/*Result component*/}
{currentQuestion===questions.length && (<Result
userAnswers={userAnswers}
questions={questions}
resetQuiz={resetQuiz}
/>)}


    </div>
  )
}

export default App
