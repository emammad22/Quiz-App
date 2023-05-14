import React, { useEffect, useState } from "react";
import questions from './data'
import Question from "./Question";
import Option from "./Option";

function App() {

    const [option, setOption] = useState();
    const [filteredQuest, setFilteredQuest] = useState(questions);
    const [category, setCategory] = useState(null);

    console.log(questions);

    useEffect(() => {

        if (category == null) {
            setFilteredQuest(questions.filter(e => e.difficulty == option))
        } else {
            setFilteredQuest(questions.filter(e => e.difficulty == option && e.category == category))
        }

    }, [option, category])


    function handleChange(event) {
        setOption(event.target.value)
    }

    function handleCategory(event) {
        setCategory(event.target.value)
    }

    function onAnswer(answer) {
        if (answer) {
            return true;
        }
    }

    return  <div className="quiz-container container">
            <h1>Quiz App</h1>
            <Option handleChange={handleChange} handleCategory={handleCategory} />
            {
                filteredQuest.map((element, index) => {
                    return <Question
                        key={element.id}
                        id={index}
                        multiple={element.multiple}
                        number={index}
                        text={element.text}
                        answers={element.answers}
                        onAnswer={onAnswer}
                    />
                })
            }
        </div>
    
}

export default App;