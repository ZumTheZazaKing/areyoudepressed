import { Context } from "./Contexts/Context";

import { useContext } from "react";
import { useHistory } from "react-router-dom";

export function Main(){

    let { currentLanguage } = useContext(Context);

    const history = useHistory();

    return (<div id="Main">
        <h1>{currentLanguage.mainPage.title}</h1>
        <button onClick={() => history.push("/rules")}>Take Quiz</button>
    </div>)
}