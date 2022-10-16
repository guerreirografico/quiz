import { useContext } from 'react'
import { QuizContext } from '../../context/quiz';

import './Options.css';

export const Options = ({ options, selectOptions, answer , numIndex}) => {
    const [quizState, dispatch]= useContext(QuizContext);
    const currentQuestion = quizState.questions[quizState.currentQuestion];

    return (
        <div>
            <div className={`${
                numIndex === 0 ? "primeira" :
                numIndex === 1 ? "segunda" :
                numIndex === 2 ? "terceira" : "quarta" }

                ${quizState.answerSelected && options === answer ? "correct" : ""}
                ${quizState.answerSelected && options !== answer ? "wrong" : ""
            }`}

            onClick={() => selectOptions()}
            >
                <p>{options}</p>
        </div> 
        </div>
        
    );
}
