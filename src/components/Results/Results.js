import React, { useRef, useState } from 'react';
import { Button } from 'react-bootstrap';
import './Results.css'

const Results = ({ questions, result }) => {
    const showResult = useRef(null);
    const showTheResult = () => {
        showResult.current.style.display ='block';
    }

    // const [isShowed, setIsShowed] = useState(true);

    return (
        <div className='results-container' style={{ textAlign: 'center' }}>
            <h2>Results</h2>
            <h4 ref={showResult} style={{display: 'none'}}>Total marks: {result} out of {questions.length}</h4>
            <Button size='lg' onClick={showTheResult}>Check Result</Button>
        </div>
    );
};

export default Results;