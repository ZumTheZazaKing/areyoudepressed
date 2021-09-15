import { useContext, useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';

import { Context } from "./Contexts/Context";

export function Quiz(){

    const history = useHistory();

    useEffect(() => {if(!quizStart)history.push("/")});

    let { quizStart, en, 
        depressionScore, setDepressionScore, 
        anxietyScore, setAnxietyScore, 
        stressScore, setStressScore 
    } = useContext(Context);

    const questions = en.quizPage.questions;
    let options = en.quizPage.options;

    let [questionIndex, setQuestionIndex] = useState(0);
    let [optionValue, setOptionValue] = useState(0);


    function incrementIndex(){
        addScore();
        setQuestionIndex(++questionIndex);
        setOptionValue(0);

        if(questionIndex >= questions.length){history.push("/result")}
    }

    const selectOption = e => {
        setOptionValue(e.target.id);
    }

    const addScore = () => {
        if(questions[questionIndex].type === "stress"){
            setStressScore(stressScore + Number(optionValue));
        } else if(questions[questionIndex].type === "anxiety"){
            setAnxietyScore(anxietyScore + Number(optionValue));
        } else {
            setDepressionScore(depressionScore + Number(optionValue))
        }
    }

    return (<div id="Quiz">
        <h1>Quiz</h1>
        <p id="question">{questions[questionIndex].text}</p>
        <div id="options">
            {options && options.map(option => <p id={option.value} onClick={e => selectOption(e)}>{option.text}</p>)}
        </div>
        <button disabled={optionValue ? false : true} onClick={() => incrementIndex()}>Next</button>
    </div>)
}