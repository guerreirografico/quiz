//ES7+ React/Redux/React-Native snippets
//cmd - rafce
import { useContext } from "react";
import { QuizContext } from "../../context/quiz";

import Quiz from "../../assets/quiz.svg";
import "./Welcome.css";

export const Welcome = () => {
  const quizState = useContext(QuizContext);

  console.log(quizState);
  
  return (
    <div id="welcome">
        <h2>Seja bem-vindo</h2>
        <p>Clique no botão abaixo para começar:</p>
        <button>Iniciar</button>
        <img src={Quiz} alt="Inicio do Quiz" />
    </div>
  )
}
