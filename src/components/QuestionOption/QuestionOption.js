import './QuestionOption.css'

const QuestionOption = ({ option, setQuizResult, correctAnswer }) => {

    return (
        <div className='option-container'>
            <input type="radio" name="options" id={option} className='radio__input'
                onClick={event => {
                    setQuizResult(event.target.value, correctAnswer);
                    event.target.setAttribute('disabled', true);
                }} value={option} />
            <label htmlFor={option} className='radio__label'>{option}</label>
        </div>
    );
};

export default QuestionOption;