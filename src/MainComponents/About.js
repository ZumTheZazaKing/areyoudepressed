import { useContext } from "react";

import { Context } from '../Contexts/Context';

export function About(){

    let { currentLanguage } = useContext(Context);

    return <div id="About">
        <div className="content">
            <h2>{currentLanguage.aboutPage.contentOne.title}</h2>
            <details>
                <summary></summary>
                <p>
                {currentLanguage.aboutPage.contentOne.body[0]}
                {currentLanguage.aboutPage.contentOne.body[1]}
                {currentLanguage.aboutPage.contentOne.body[2]}
                <br/><br/>
                {currentLanguage.aboutPage.contentOne.body[3]}
                {currentLanguage.aboutPage.contentOne.body[4]}
                <br/><br/>
                {currentLanguage.aboutPage.contentOne.body[5]}
                {currentLanguage.aboutPage.contentOne.body[6]}
                <b>Are You Depressed?</b>
                </p>
            </details>
        </div>

        
        <div className="content">
            <p id="starting">{currentLanguage.aboutPage.starting}</p>
            <h2>{currentLanguage.aboutPage.contentTwo.title}</h2>
            <details>
                <summary></summary>
                <p>
                {currentLanguage.aboutPage.contentTwo.body[0]}
                <br/><br/>
                {currentLanguage.aboutPage.contentTwo.body[1]}
                {currentLanguage.aboutPage.contentTwo.body[2]}
                {currentLanguage.aboutPage.contentTwo.body[3]}
                {currentLanguage.aboutPage.contentTwo.body[4]}
                <br/><br/>
                {currentLanguage.aboutPage.contentTwo.body[5]}
                </p>
            </details>
        </div>

        <div className="content">
            <h2>{currentLanguage.aboutPage.contentThree.title}</h2>
            <details>
                <summary></summary>
                <p>
                    {currentLanguage.aboutPage.contentThree.body[0]}
                </p>
                <details className="articles">
                    <summary></summary>
                        <ul>
                            {currentLanguage.aboutPage.contentThree.body[1].articles &&
                            currentLanguage.aboutPage.contentThree.body[1].articles.map((article, index) => {
                                return <li key={index}><b> {article}</b></li>
                            })}
                        </ul>
                </details>
            </details>
        </div>

        <div className="content" id="scoreTable">
            <h2>{currentLanguage.aboutPage.contentFour.title}</h2>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>{currentLanguage.resultPage.depressionLabel}</th>
                        <th>{currentLanguage.resultPage.anxietyLabel}</th>
                        <th>{currentLanguage.resultPage.stressLabel}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>{currentLanguage.resultPage.results[0]}</th>
                        <td>0-5</td>
                        <td>0-4</td>
                        <td>0-7</td>
                    </tr>
                    <tr>
                        <th>{currentLanguage.resultPage.results[1]}</th>
                        <td>6-7</td>
                        <td>5-6</td>
                        <td>8-9</td>
                    </tr>
                    <tr>
                        <th>{currentLanguage.resultPage.results[2]}</th>
                        <td>8-10</td>
                        <td>7-8</td>
                        <td>10-13</td>
                    </tr>
                    <tr>
                        <th>{currentLanguage.resultPage.results[3]}</th>
                        <td>11-14</td>
                        <td>9-10</td>
                        <td>14-17</td>
                    </tr>
                    <tr>
                        <th>{currentLanguage.resultPage.results[4]}</th>
                        <td>15+</td>
                        <td>11+</td>
                        <td>18+</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
}