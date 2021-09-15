import { Context } from "./Contexts/Context";

import { useContext } from "react";
import { useHistory } from "react-router-dom";

export function Main(){

    const history = useHistory();

    return (<div>
        <h1>Main</h1>
        <button onClick={() => history.push("/rules")}>Take Quiz</button>
    </div>)
}