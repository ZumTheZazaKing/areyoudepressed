import { useEffect, useContext } from "react";
import { useHistory } from 'react-router-dom';

import { Context } from '../Contexts/Context';

export function About(){

    const history = useHistory();

    let { showAbout, currentLanguage } = useContext(Context);

    useEffect(() => {if(!showAbout)history.push("/")});

    return <div id="About">
        <div className="content">
            <h2>{currentLanguage.aboutPage.contentOne.title}</h2>
            <p>
                {currentLanguage.aboutPage.contentOne.body[0]}
                <br/><br/>
                {currentLanguage.aboutPage.contentOne.body[1]}
                {currentLanguage.aboutPage.contentOne.body[2]}
                {currentLanguage.aboutPage.contentOne.body[3]}
                <br/><br/>
                {currentLanguage.aboutPage.contentOne.body[4]}
            </p>
        </div>

        <div className="content">
            <h2>{currentLanguage.aboutPage.contentTwo.title}</h2>
            <p>
                {currentLanguage.aboutPage.contentTwo.body[0]}
            </p>
            <details>
                <summary></summary>
                <ul>
                    {currentLanguage.aboutPage.contentTwo.body[1].articles &&
                    currentLanguage.aboutPage.contentTwo.body[1].articles.map((article, index) => {
                        return <li key={index}><b> {article}</b></li>
                    })}
                </ul>
            </details>
        </div>

        <div className="content">
            <h2>{currentLanguage.aboutPage.contentThree.title}</h2>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Depression</th>
                        <th>Anxiety</th>
                        <th>Stress</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Normal</th>
                        <td>0-5</td>
                        <td>0-4</td>
                        <td>0-7</td>
                    </tr>
                    <tr>
                        <th>Mild</th>
                        <td>6-7</td>
                        <td>5-6</td>
                        <td>8-9</td>
                    </tr>
                    <tr>
                        <th>Moderate</th>
                        <td>8-10</td>
                        <td>7-8</td>
                        <td>10-13</td>
                    </tr>
                    <tr>
                        <th>Severe</th>
                        <td>11-14</td>
                        <td>9-10</td>
                        <td>14-17</td>
                    </tr>
                    <tr>
                        <th>Extremely Severe</th>
                        <td>15+</td>
                        <td>11+</td>
                        <td>18+</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
}