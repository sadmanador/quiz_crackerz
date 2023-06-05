import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';
import Results from '../Results/Results';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import './QuizTest.css'


const QuizTest = () => {
    const { data } = useLoaderData();
    const { name, questions } = data;
    const [result, setResult] = useState(0);

    const notify = () => toast("Right Answer", { containerId: 'positive' });
    const notifyNegative = () => toast("Wrong Answer", { containerId: 'negative' });

    const setQuizResult = (answer, correctAnswer) => {
        if (answer === correctAnswer) {
            setResult(result + 1)
            notify();
        }
        else if (answer !== correctAnswer) {
            notifyNegative()
        }
    }


    return (
        <div className='option-and-result-container'>
            <div className='test-container'>
                <h2 style={{ textAlign: 'center' }} className='topic-name'>{name}</h2>
                {
                    questions.map(questionSingle => <Question
                        key={questionSingle.id}
                        questionSingle={questionSingle}
                        setQuizResult={setQuizResult}
                        result={result}
                    ></Question>)
                }
            </div>
            <div className="result-container">
                <Results
                    result={result}
                    questions={questions}
                ></Results>
            </div>
            <ToastContainer enableMultiContainer containerId={'positive'} position="top-center" toastStyle={{ fontSize: '1.5em' }}></ToastContainer>
            <ToastContainer enableMultiContainer containerId={'negative'} position="top-center" toastStyle={{ color: "white", fontSize: '1.5em', backgroundColor: 'crimson' }}></ToastContainer>
        </div>
    );
};

export default QuizTest;