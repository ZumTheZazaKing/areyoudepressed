import { useEffect, useContext } from "react";
import { useHistory } from 'react-router-dom';

import { Context } from '../Contexts/Context';

export function About(){

    const history = useHistory();

    let { showAbout } = useContext(Context);

    useEffect(() => {if(!showAbout)history.push("/")});

    return <div id="About">
        <h1>About</h1>
    </div>
}