import { useHistory } from "react-router-dom"
import { useContext } from 'react';

import { Context } from "./Contexts/Context";

export function Rules(){

    const history = useHistory();

    let { setQuizStart, en, language } = useContext(Context);

    let currentLanguage;

    if(language === "en"){
        currentLanguage = en;
    }

    const startQuiz = () => {
        history.push("/quiz");
        setQuizStart(true)
    }

    return (<div>
        <h1>{currentLanguage.rulesPage.title}</h1>
        <button onClick={() => startQuiz()}>Start</button>
    </div>)
}