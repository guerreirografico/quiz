import { useContext } from 'react'
import { QuizContext } from '../../context/quiz';

import './Options.css';

export const Options = ({ options, selectOptions, answer }) => {
    const [quizState, dispatch]= useContext(QuizContext);

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
