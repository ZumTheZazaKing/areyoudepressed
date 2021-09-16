import { useContext, useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';

import Button from '@material-ui/core/Button';

import { Context } from "./Contexts/Context";

export function Quiz(){

    const history = useHistory();

    useEffect(() => {if(!quizStart)history.push("/")});

    let { quizStart, currentLanguage,
        depressionScore, setDepressionScore, 
        anxietyScore, setAnxietyScore, 
        stressScore, setStressScore,
        setQuizStart,
        setShowResult
    } = useContext(Context);

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
        console.log(e.target.id);
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
        <p id="question">{`${questionIndex+1}. ${questions[questionIndex].text}`}</p>
        <div id="options">
            {options && options.map((option, index) => 
            <Button className="option" variant="contained" key={index} id={option.value} onClick={e => selectOption(e)} >
                {option.text}
            </Button>)}
        </div>
        <br/>
        <Button id="nextButton" variant="contained" color="secondary"  disabled={optionValue ? false : true} onClick={() => incrementIndex()}>
            {currentLanguage.quizPage.button}
        </Button>
    </div>)
}