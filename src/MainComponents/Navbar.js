import { useHistory } from 'react-router-dom';
import { useContext } from 'react';

import { Context } from '../Contexts/Context';

export function Navbar(){

    const history = useHistory();

    let { currentLanguage, setShowAbout } = useContext(Context);

    const goAbout = () => {
        history.push("/about");
        setShowAbout(true);
    }

    return (<div id="Navbar">
        <h3>Are You Depressed?</h3>
        <div id="links">
            <span onClick={() => history.push("/")}>{currentLanguage.navbar.home}</span>
            <span onClick={() => goAbout()}>{currentLanguage.navbar.about}</span>
        </div>
    </div>)
}