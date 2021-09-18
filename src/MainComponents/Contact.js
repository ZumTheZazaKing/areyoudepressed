import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { send } from 'emailjs-com';
import TextField from '@material-ui/core/TextField';

import { Context } from "../Contexts/Context";

export function Contact(){

    const history = useHistory();

    const [sendName, setSendName] = useState("");
    const [sendEmail, setSendEmail] = useState("");
    const [sendSubject, setSendSubject] = useState("");
    const [sendMessage, setSendMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        send(
            'service_6hdjrgw',
            'template_kpgb3gh',
            {name:sendName, email:sendEmail, subject:sendSubject, message:sendMessage},
            'user_gtWgrIIYShDcN57WcFFcz'
        )
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
        })
        .catch((err) => {
            console.log('FAILED...', err);
        });

        setSendName("");
        setSendEmail("");
        setSendSubject("");
        setSendMessage("");

    }

    let { showContact, currentLanguage } = useContext(Context);

    useEffect(() => {if(!showContact)history.push("/")});

    return (<div id="Contact">
        <div id="email">
            <h1>{currentLanguage.contactPage.title}</h1>
            <p>{currentLanguage.contactPage.description}</p>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type="text" name="name" value={sendName} onChange={e => setSendName(e.target.value)} required/>
                <input type="email" name="email" value={sendEmail} onChange={e => setSendEmail(e.target.value)} required/>
                <input type="subject" name="subject" value={sendSubject} onChange={e => setSendSubject(e.target.value)} required/>
                <textarea name="message" onChange={e => setSendMessage(e.target.value)} value={sendMessage} required/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    </div>)
}