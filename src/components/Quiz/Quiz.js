import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Quiz.css'

const Quiz = ({ quiz }) => {
    const { name, logo, id } = quiz;
    return (
        <div className='quiz-card'>
            <div className="quiz-card-img">
                <img src={logo} alt={name} />
            </div>
            <div className="quiz-info">
                <h3 className='quiz-topic-name'>{name}</h3>
                <Link to={`/quiz/${id}`}>
                    <button className='start-practice-btn'>
                        <span>Start Practice </span>
                        <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                    </button>
                </Link>

            </div>
        </div>
    );
};

export default Quiz;