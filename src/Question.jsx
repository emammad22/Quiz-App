import React, { useState } from "react";

function Question(props) {

    const { id, multiple, number, text, answers, onAnswer } = props;
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [answered, setAnswered] = useState(false);

    function handleAnswer(answer) {
        setSelectedAnswer(answer);
        onAnswer(answer.isCorrect);
        setAnswered(true);
    }

    return (
        <>
            <div className="card w-50 mt-3 mb-3">
                <div className="card-header">
                    {number + 1}. {text}
                </div>
            </div>
            {answers.map((answer, index) => {
                return <div className="form-check form-check-block">
                    {multiple ? <input type="radio" className="form-check-input" id="inlineCheckbox1" disabled={answered} value={index} /> :
                        <input type="radio" className="form-check-input" id="inlineCheckbox1" name={id} disabled={answered} onChange={() => { handleAnswer(answer) }} value={index} />}
                    <label htmlFor="inlineCheckbox1" className="form-check-label">{answer.text}</label>
                </div>
            })
            }
            {
                selectedAnswer && !selectedAnswer.isCorrect ? <p style={{ color: 'red' }}>Is not Correct</p> :
                    null
            }
            {
                selectedAnswer && selectedAnswer.isCorrect ? <p style={{ color: 'green' }}>Is  Correct</p> :
                    null
            }

        </>
    );
}

export default Question;