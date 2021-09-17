import { useHistory } from 'react-router-dom';

export function Navbar(){

    const history = useHistory();

    return (<div id="Navbar">
        <h3>Are You Depressed?</h3>
        <div id="links">
            <span onClick={() => history.push("/")}>HOME</span>
            <span>ABOUT</span>
        </div>
    </div>)
}