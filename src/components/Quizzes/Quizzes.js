import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import './Quizzes.css'

const Quizzes = () => {
    const { data } = useLoaderData();
    return (
        <div className='main-container'>
            <header>
                <h1>Welcome to the Quiz Mania</h1>
                <p>Check your skill of coding today</p>
                <p>to challenge the industry standard</p>
            </header>
            <div className="quiz-container">
                {
                    data.map(quiz => <Quiz key={quiz.id} quiz={quiz}></Quiz>)
                }
            </div>
        </div>
    );
};

export default Quizzes;