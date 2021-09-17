import { useHistory } from 'react-router-dom';
import { useContext } from 'react';

import { Context } from '../Contexts/Context';

export function Navbar(){

    const history = useHistory();

    let { currentLanguage } = useContext(Context);

    return (<div id="Navbar">
        <h3>Are You Depressed?</h3>
        <div id="links">
            <span onClick={() => history.push("/")}>{currentLanguage.navbar.home}</span>
            <span onClick={() => history.push("/about")}>{currentLanguage.navbar.about}</span>
        </div>
    </div>)
}