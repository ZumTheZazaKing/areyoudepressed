import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { Context } from "./Contexts/Context";

export function Result(){

    const history = useHistory();

    let { depressionScore, setDepressionScore,
        anxietyScore, setAnxietyScore,
        stressScore, setStressScore,
        setShowResult, 
        showResult,
        currentLanguage
    } = useContext(Context);

    const [depressionLevel, setDepressionLevel] = useState("");
    const [anxietyLevel, setAnxietyLevel] = useState("");
    const [stressLevel, setStressLevel] = useState("");

    const calcDepressionLevel = () => {
        if(depressionScore >= 0 && depressionScore <= 5){
            setDepressionLevel(currentLanguage.resultPage.results[0]);

        } else if(depressionScore >= 6 && depressionScore <= 7){
            setDepressionLevel(currentLanguage.resultPage.results[1]);

        } else if(depressionScore >= 8 && depressionScore <= 10){
            setDepressionLevel(currentLanguage.resultPage.results[2]);

        } else if(depressionScore >= 11 && depressionScore <= 14){
            setDepressionLevel(currentLanguage.resultPage.results[3]);

        } else {
            setDepressionLevel(currentLanguage.resultPage.results[4]);
        }
    }

    const calcAnxietyLevel = () => {
        if(anxietyScore >= 0 && anxietyScore <= 4){
            setAnxietyLevel(currentLanguage.resultPage.results[0]);

        } else if(anxietyScore >= 5 && anxietyScore <= 6){
            setAnxietyLevel(currentLanguage.resultPage.results[1]);

        } else if(anxietyScore >= 7 && anxietyScore <= 8){
            setAnxietyLevel(currentLanguage.resultPage.results[2]);

        } else if(anxietyScore >= 9 && anxietyScore <= 10){
            setAnxietyLevel(currentLanguage.resultPage.results[3]);

        } else {
            setAnxietyLevel(currentLanguage.resultPage.results[4]);
        }
    }

    const calcStressLevel = () => {
        if(stressScore >= 0 && stressScore <= 7){
            setStressLevel(currentLanguage.resultPage.results[0]);

        } else if(stressScore >= 8 && stressScore <= 9){
            setStressLevel(currentLanguage.resultPage.results[1]);

        } else if(stressScore >= 10 && stressScore <= 13){
            setStressLevel(currentLanguage.resultPage.results[2]);

        } else if(stressScore >= 14 && stressScore <= 17){
            setStressLevel(currentLanguage.resultPage.results[3]);

        } else {
            setStressLevel(currentLanguage.resultPage.results[4]);
        }
    }

    useEffect(() => {
        if(!showResult)history.push("/")
        calcDepressionLevel();
        calcAnxietyLevel();
        calcStressLevel();
    });

    const goMain = () => {
        history.push("/");
        setShowResult(false);
        setDepressionScore(0);
        setAnxietyScore(0);
        setStressScore(0);
    };

    return (<div id="Result">
        <h1>{currentLanguage.resultPage.title}</h1>
        <p>{currentLanguage.resultPage.depressionLabel} {depressionLevel} {depressionScore}</p>
        <p>{currentLanguage.resultPage.anxietyLabel} {anxietyLevel} {anxietyScore}</p>
        <p>{currentLanguage.resultPage.stressLabel} {stressLevel} {stressScore}</p>
        <button onClick={() => goMain()}>Return</button>
    </div>)
}