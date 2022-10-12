//ES7+ React/Redux/React-Native snippets
//cmd - rafce
import { useContext } from "react";
import { QuizContext } from "../../context/quiz";

import Quiz from "../../assets/quiz.svg";
import "./Welcome.css";

export const Welcome = () => {
  const [quizState, dispatch]= useContext(QuizContext);

  return (
    <div id="welcome">
        <h2>Seja bem-vindo</h2>
        <p>Clique no botão abaixo para começar:</p>
        <button onClick={() => dispatch({type: "CHANGE_STATE"})}>Iniciar</button>
        <img src={Quiz} alt="Inicio do Quiz" />
    </div>
  )
}
