import { useHistory } from "react-router-dom"
import { useContext, useEffect } from 'react';

import { Context } from "../Contexts/Context";

import Button from '@material-ui/core/Button';

export function Rules(){

    const history = useHistory();

    let { setQuizStart, currentLanguage, setShowNav, showRules } = useContext(Context);

    useEffect(() => {if(!showRules)history.push("/")})

    const rules = currentLanguage.rulesPage.rules;

    const startQuiz = () => {
        history.push("/quiz");
        setQuizStart(true)
    }

    const back = () => {
        history.push("/");
        setShowNav(true);
    }

    return (<div id="Rules">
        <h1>{currentLanguage.rulesPage.title}</h1>
        <p>
            {rules && rules.map((rule, index) => <span key={index}>{index+1}. {rule}<br/><br/></span>)}
        </p>
        <br/>
        <Button id="startButton" variant="contained" onClick={() => startQuiz()}>
            {currentLanguage.rulesPage.button}
        </Button>
        <Button id="backButton" onClick={() => back()}>
            {currentLanguage.rulesPage.back}
        </Button>
    </div>)
}