import { useHistory } from 'react-router-dom';
import { useContext, useState } from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import { Context } from '../Contexts/Context';

export function Navbar(){

    const history = useHistory();

    let { currentLanguage, setShowAbout, setShowContact } = useContext(Context);

    const [mobileClass, setMobileClass] = useState("");

    const showMobileMenu = () => setMobileClass("show");
    const hideMobileMenu = () => setMobileClass("");

    const toggleMobileMenu = () => {
        mobileClass ? hideMobileMenu() : showMobileMenu();
    }

    const goHome = () => {
        history.push("/");
        hideMobileMenu();
    }

    const goAbout = () => {
        history.push("/about");
        setShowAbout(true);
        hideMobileMenu();
    }

    const goContact = () => {
        history.push("/contact");
        setShowContact(true);
        hideMobileMenu();
    }

    return (<div id="Navbar">
        <h3>Are You Depressed?</h3>
        <div id="links">
            <span onClick={() => goHome()}>{currentLanguage.navbar.home}</span>
            <span onClick={() => goAbout()}>{currentLanguage.navbar.about}</span>
            <span onClick={() => goContact()}>{currentLanguage.navbar.contact}</span>
            <span id="hamburger" onClick={() => toggleMobileMenu()}>{mobileClass ? <CloseIcon/> : <MenuIcon/>}</span>
        </div>
        <div id="mobile" className={mobileClass}>
            <span onClick={() => goHome()}>{currentLanguage.navbar.home}</span>
            <hr/>
            <span onClick={() => goAbout()}>{currentLanguage.navbar.about}</span>
            <hr/>
            <span onClick={() => goContact()}>{currentLanguage.navbar.contact}</span>
        </div>
    </div>)
}