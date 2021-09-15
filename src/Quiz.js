import { useContext, useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';

import { Context } from "./Contexts/Context";

export function Quiz(){

    const history = useHistory();

    useEffect(() => {if(!quizStart)history.push("/")});

    let { quizStart, en, language,
        depressionScore, setDepressionScore, 
        anxietyScore, setAnxietyScore, 
        stressScore, setStressScore,
        setQuizStart,
        setShowResult
    } = useContext(Context);

    let currentLanguage;

    if(language === "en"){
        currentLanguage = en;
    }

    const questions = currentLanguage.quizPage.questions;
    let options = currentLanguage.quizPage.options;

    let [questionIndex, setQuestionIndex] = useState(0);
    let [optionValue, setOptionValue] = useState(0);


    function incrementIndex(){
        addScore();
        setQuestionIndex(++questionIndex);
        setOptionValue(0);

        if(questionIndex >= questions.length){
            setShowResult(true);
            history.push("/result");
            setQuizStart(false);
        }
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
            {options && options.map((option, index) => <p key={index} id={option.value} onClick={e => selectOption(e)}>{option.text}</p>)}
        </div>
        <button disabled={optionValue ? false : true} onClick={() => incrementIndex()}>Next</button>
    </div>)
}