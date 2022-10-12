import { useContext } from "react";
import { QuizContext } from "./context/quiz";

import { Welcome } from "./components/Welcome/Welcome";
import { Question } from "./components/Question/Question";

import "./App.css";

export const App = () => {
  const [quizState, dispatch]= useContext(QuizContext);

  return (
   <div className='App'>
    <h1>Quiz Biblico</h1>
    {quizState.gameStage === "Start" && <Welcome />}
    {quizState.gameStage === "Playing" && <Question />}
   </div>
  )
}
