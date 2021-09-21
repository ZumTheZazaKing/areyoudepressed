import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { send } from 'emailjs-com';
import TextField from '@material-ui/core/TextField'; 
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

import { Context } from "../Contexts/Context";

export function Contact(){

    const history = useHistory();

    const [sendName, setSendName] = useState("");
    const [sendEmail, setSendEmail] = useState("");
    const [sendSubject, setSendSubject] = useState("");
    const [sendMessage, setSendMessage] = useState("");

    const [open, setOpen] = useState(false);
    const [severity, setSeverity] = useState("success");
    const [alertMsg, setAlertMsg] = useState("");
    const [sendDisable, setSendDisable] = useState(false);

    const handleClose = () => {
        setOpen(false);
        setSendDisable(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSendDisable(false);

        send(
            'service_6hdjrgw',
            'template_kpgb3gh',
            {name:sendName, email:sendEmail, subject:sendSubject, message:sendMessage},
            'user_gtWgrIIYShDcN57WcFFcz'
        )
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            setOpen(true);
            setSeverity("success");
            setAlertMsg(currentLanguage.contactPage.emailSend);
        })
        .catch((err) => {
            console.log('FAILED...', err);
            setOpen(true);
            setSeverity("error");
            setAlertMsg(currentLanguage.contactPage.emailError);
        });

        setSendName("");
        setSendEmail("");
        setSendSubject("");
        setSendMessage("");

    }

    let { showContact, currentLanguage } = useContext(Context);

    useEffect(() => {if(!showContact)history.push("")});

    return (<div id="Contact">
        <div id="email">
            <h1>{currentLanguage.contactPage.title}</h1>
            <p>{currentLanguage.contactPage.description}</p>
            <form onSubmit={(e) => handleSubmit(e)}>
                <TextField className="input" size="small" label="Name" variant="outlined" type="text" name="name" value={sendName} onChange={e => setSendName(e.target.value)} required/>
                <TextField className="input" size="small" label="Email" variant="outlined" type="email" name="email" value={sendEmail} onChange={e => setSendEmail(e.target.value)} required/>
                <TextField className="input" size="small" label="Subject" variant="outlined" type="text" name="subject" value={sendSubject} onChange={e => setSendSubject(e.target.value)}/>
                <TextField 
                className="input" 
                multiline={true}
                minRows={5}
                maxRows={10} 
                label="Message" 
                variant="outlined" 
                name="message" 
                onChange={e => setSendMessage(e.target.value)} 
                value={sendMessage}
                inputProps={{maxLength:800}}
                required/>
                <input disabled={sendDisable} type="submit" value={currentLanguage.contactPage.sendButton}/>
            </form>
        </div>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={severity} sx={{width:'100%'}}>
                {alertMsg}
            </Alert>
        </Snackbar>
    </div>)
}