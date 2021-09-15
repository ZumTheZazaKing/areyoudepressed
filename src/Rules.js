import { useHistory } from "react-router-dom"
import { useContext } from 'react';

import { Context } from "./Contexts/Context";

export function Rules(){

    const history = useHistory();

    let { setQuizStart, currentLanguage} = useContext(Context);

    const rules = currentLanguage.rulesPage.rules;

    const startQuiz = () => {
        history.push("/quiz");
        setQuizStart(true)
    }

    return (<div id="Rules">
        <h1>{currentLanguage.rulesPage.title}</h1>
        <ol>
            {rules && rules.map((rule, index) => <li key={index}>{rule}</li>)}
        </ol>
        <button onClick={() => startQuiz()}>Start</button>
    </div>)
}