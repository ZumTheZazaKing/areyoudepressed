import { useHistory } from "react-router-dom"
import { useContext } from 'react';

import { Context } from "./Contexts/Context";

import Button from '@material-ui/core/Button';

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
        <p>
            {rules && rules.map((rule, index) => <span key={index}>{index+1}. {rule}<br/><br/></span>)}
        </p>
        <br/>
        <Button variant="contained" onClick={() => startQuiz()}>
            {currentLanguage.rulesPage.button}
        </Button>
    </div>)
}