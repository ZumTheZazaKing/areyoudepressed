import { Context } from "./Contexts/Context";

import { useContext } from "react";
import { useHistory } from "react-router-dom";

export function Main(){

    let { en, language, setLanguage } = useContext(Context);

    let currentLanguage;

    if(language === "en"){
        currentLanguage = en;
    }

    const history = useHistory();

    return (<div>
        <h1>{currentLanguage.mainPage.title}</h1>
        <button onClick={() => history.push("/rules")}>Take Quiz</button>
    </div>)
}