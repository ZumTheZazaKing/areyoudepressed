import { useHistory } from "react-router-dom"
import { useContext } from 'react';

import { Context } from "./Contexts/Context";

export function Rules(){

    const history = useHistory();

    let { setQuizStart } = useContext(Context);

    const startQuiz = () => {
        history.push("/quiz");
        setQuizStart(true)
    }

    return (<div>
        <h1>Rules</h1>
        <button onClick={() => startQuiz()}>Start</button>
    </div>)
}