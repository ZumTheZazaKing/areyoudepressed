import { useHistory } from 'react-router-dom';
import { useContext, useState } from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Logo from "../Images/logo2.png"

import { Context } from '../Contexts/Context';

export function Navbar(){

    const history = useHistory();

    let { currentLanguage, setShowAbout, setShowContact, setShowHotlines } = useContext(Context);

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

    const goHotlines = () => {
        history.push("/hotlines");
        setShowHotlines(true);
        hideMobileMenu();
    }

    return (<div id="Navbar">
        <img src={Logo} alt=""/>
        <div id="links">
            <span onClick={() => goHome()}>{currentLanguage.navbar.home}</span>
            <span onClick={() => goAbout()}>{currentLanguage.navbar.about}</span>
            <span onClick={() => goContact()}>{currentLanguage.navbar.contact}</span>
            <span onClick={() => goHotlines()}>{currentLanguage.navbar.hotlines}</span>
            <span id="hamburger" onClick={() => toggleMobileMenu()}>{mobileClass ? <CloseIcon/> : <MenuIcon/>}</span>
        </div>
        <div id="mobile" className={mobileClass}>
            <span onClick={() => goHome()}>{currentLanguage.navbar.home}</span>
            <hr/>
            <span onClick={() => goAbout()}>{currentLanguage.navbar.about}</span>
            <hr/>
            <span onClick={() => goContact()}>{currentLanguage.navbar.contact}</span>
            <hr/>
            <span onClick={() => goHotlines()}>{currentLanguage.navbar.hotlines}</span>
        </div>
    </div>)
}