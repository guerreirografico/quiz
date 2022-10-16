//ES7+ React/Redux/React-Native snippets
//cmd - rafce
import { useContext } from "react";
import { QuizContext } from "../../context/quiz";

import Igreja from "../../assets/igreja.png";
import "./Welcome.css";

export const Welcome = () => {
  const [quizState, dispatch]= useContext(QuizContext);

  return (
    <div id="welcome">
        <h2>Seja bem-vindo</h2>
        <p>Clique no botão abaixo para começar:</p>
        <button onClick={() => dispatch({type: "CHANGE_STATE"})}>Iniciar</button>
        <div>
          <img className="logo-igreja" src={Igreja} alt="Inicio do Quiz" />
        </div>
    </div>
  )
}
