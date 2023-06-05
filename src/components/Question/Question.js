import React from 'react';
import QuestionOption from '../QuestionOption/QuestionOption';
import './Question.css'

const Question = ({ questionSingle, setQuizResult, result }) => {
    const { correctAnswer, question, options } = questionSingle;
    const htmlQuestion = question;

    // console.log(questionSingle);

    return (
        <div className='options-main-container'>
            <div className='question-header' dangerouslySetInnerHTML={{ __html: htmlQuestion }} />
            <div className="options-container">
                {
                    options.map((option, index) => <QuestionOption
                        key={index}
                        option={option}
                        correctAnswer={correctAnswer}
                        setQuizResult={setQuizResult}
                        result={result}
                    >{option}</QuestionOption>)
                }
            </div>
        </div>
    );
};

export default Question;