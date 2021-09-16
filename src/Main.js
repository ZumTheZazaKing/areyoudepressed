import { Context } from "./Contexts/Context";

import { useContext } from "react";
import { useHistory } from "react-router-dom";

import Button from '@material-ui/core/Button';

export function Main(){

    let { currentLanguage } = useContext(Context);

    const history = useHistory();

    return (<div id="Main">
        <p id="title">{currentLanguage.mainPage.title}</p>
        <p>{currentLanguage.mainPage.description}</p>
        <Button id="button" variant="contained" onClick={() => history.push("/rules")}>
            {currentLanguage.mainPage.button}
        </Button>
    </div>)
}