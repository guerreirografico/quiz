import { useContext } from 'react'
import { QuizContext } from '../../context/quiz';

import './Options.css';

export const Options = ({ usuario, options, selectOptions, answer }) => {
    const [quizState, dispatch]= useContext(QuizContext);
    console.log("Option12222: ", usuario)

    return (
        <div className={`options ${
                quizState.answerSelected && options === answer ? "correct" : ""
            } ${quizState.answerSelected && options !== answer ? "wrong" : ""
            }`}

            onClick={() => selectOptions()}
            >
            <p>{options}</p>
        </div>
    );
}
