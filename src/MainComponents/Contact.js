import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { Context } from "../Contexts/Context";

export function Contact(){

    const history = useHistory();

    let { showContact } = useContext(Context);

    useEffect(() => {if(!showContact)history.push("/")});

    return (<div>
        <h1>Hello World</h1>
    </div>)
}