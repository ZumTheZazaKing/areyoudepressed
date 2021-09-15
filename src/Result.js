import { useContext } from "react";

import { Context } from "./Contexts/Context";

export function Result(){

    let { depressionScore, anxietyScore, stressScore } = useContext(Context);

    return (<div>
        <h1>Result</h1>
        <p>Depression: {depressionScore}</p>
        <p>Anxiety: {anxietyScore}</p>
        <p>Stress: {stressScore}</p>
        <button>Return</button>
    </div>)
}