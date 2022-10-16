import { useContext} from 'react';
import { QuizContext } from '../../context/quiz';

import Igreja from "../../assets/igreja.png";

import "./GameOver.css";

export const GameOver = () => {
  const [quizState, dispatch]= useContext(QuizContext);

  return (
    <div id='gameover'>
      <h2>Fim de Jogo</h2>
      <p>Pontuação: {quizState.score}</p>
      <p>Você acertou {quizState.score} de {quizState.questions.length} {""} perguntas.</p>
      <img className="logo-igreja" src={Igreja} alt="fim do quiz" />
      <button onClick={() => dispatch({ type: "NEW_GAME" })}>Reiniciar</button>
    </div>
  )
}
