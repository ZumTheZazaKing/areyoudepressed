import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import CircularProgress from '@mui/material/CircularProgress';
import Button from '@material-ui/core/Button';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import Heart from '../Images/ResultReactions/heart.jpeg';
import SmileOpen from '../Images/ResultReactions/smileopen.png';
import SmileClose from '../Images/ResultReactions/smileclose.jpeg';
import Sad from '../Images/ResultReactions/sad.jpeg';
import Danger from '../Images/ResultReactions/danger.jpeg';

import { Context } from "../Contexts/Context";

export function Result(){

    const history = useHistory();

    let { depressionScore, setDepressionScore,
        anxietyScore, setAnxietyScore,
        stressScore, setStressScore,
        setShowResult, 
        showResult,
        currentLanguage,
        setShowNav
    } = useContext(Context);

    const [depressionLevel, setDepressionLevel] = useState("");
    const [anxietyLevel, setAnxietyLevel] = useState("");
    const [stressLevel, setStressLevel] = useState("");

    const [depressionPercent, setDepressionPercent] = useState(0);
    const [anxietyPercent, setAnxietyPercent] = useState(0);
    const [stressPercent, setStressPercent] = useState(0);

    const [depressionColor, setDepressionColor] = useState("secondary");
    const [anxietyColor, setAnxietyColor] = useState("secondary");
    const [stressColor, setStressColor] = useState("secondary");

    const [depressionImg, setDepressionImg] = useState("");
    const [anxietyImg, setAnxietyImg] = useState("");
    const [stressImg, setStressImg] = useState("");

    const [depressionTips, setDepressionTips] = useState("");
    const [anxietyTips, setAnxietyTips] = useState("");
    const [stressTips, setStressTips] = useState("");

    const calcDepressionLevel = () => {
        if(depressionScore >= 0 && depressionScore <= 5){
            setDepressionLevel(currentLanguage.resultPage.results[0]);
            setDepressionColor("secondary");
            setDepressionImg(Heart);

        } else if(depressionScore >= 6 && depressionScore <= 7){
            setDepressionLevel(currentLanguage.resultPage.results[1]);
            setDepressionColor("primary");
            setDepressionImg(SmileOpen);

        } else if(depressionScore >= 8 && depressionScore <= 10){
            setDepressionLevel(currentLanguage.resultPage.results[2]);
            setDepressionColor("success");
            setDepressionImg(SmileClose);

        } else if(depressionScore >= 11 && depressionScore <= 14){
            setDepressionLevel(currentLanguage.resultPage.results[3]);
            setDepressionColor("warning");
            setDepressionImg(Sad)

        } else {
            setDepressionLevel(currentLanguage.resultPage.results[4]);
            setDepressionColor("error");
            setDepressionImg(Danger)
        }
    }

    const calcAnxietyLevel = () => {
        if(anxietyScore >= 0 && anxietyScore <= 4){
            setAnxietyLevel(currentLanguage.resultPage.results[0]);
            setAnxietyColor("secondary");
            setAnxietyImg(Heart);

        } else if(anxietyScore >= 5 && anxietyScore <= 6){
            setAnxietyLevel(currentLanguage.resultPage.results[1]);
            setAnxietyColor("primary");
            setAnxietyImg(SmileOpen);

        } else if(anxietyScore >= 7 && anxietyScore <= 8){
            setAnxietyLevel(currentLanguage.resultPage.results[2]);
            setAnxietyColor("success");
            setAnxietyImg(SmileClose);

        } else if(anxietyScore >= 9 && anxietyScore <= 10){
            setAnxietyLevel(currentLanguage.resultPage.results[3]);
            setAnxietyColor("warning");
            setAnxietyImg(Sad);

        } else {
            setAnxietyLevel(currentLanguage.resultPage.results[4]);
            setAnxietyColor("error");
            setAnxietyImg(Danger);
        }
    }

    const calcStressLevel = () => {
        if(stressScore >= 0 && stressScore <= 7){
            setStressLevel(currentLanguage.resultPage.results[0]);
            setStressColor("secondary");
            setStressImg(Heart);

        } else if(stressScore >= 8 && stressScore <= 9){
            setStressLevel(currentLanguage.resultPage.results[1]);
            setStressColor("primary");
            setStressImg(SmileOpen);

        } else if(stressScore >= 10 && stressScore <= 13){
            setStressLevel(currentLanguage.resultPage.results[2]);
            setStressColor("success");
            setStressImg(SmileClose);

        } else if(stressScore >= 14 && stressScore <= 17){
            setStressLevel(currentLanguage.resultPage.results[3]);
            setStressColor("warning");
            setStressImg(Sad);

        } else {
            setStressLevel(currentLanguage.resultPage.results[4]);
            setStressColor("error");
            setStressImg(Danger);
        }
    }

    const calculatePercentages = () => {
        setDepressionPercent(Math.round((depressionScore/21)*100));
        setAnxietyPercent(Math.round((anxietyScore/21)*100));
        setStressPercent(Math.round((stressScore/21)*100));
    }

    useEffect(() => {
        if(!showResult)history.push("/");

        calculatePercentages();

        calcDepressionLevel();
        calcAnxietyLevel();
        calcStressLevel();
    });

    const goMain = () => {
        history.push("/");
        setShowResult(false);
        setDepressionScore(0);
        setAnxietyScore(0);
        setStressScore(0);
        setDepressionPercent(0);
        setAnxietyPercent(0);
        setStressPercent(0);
        setDepressionColor("secondary");
        setAnxietyColor("secondary");
        setStressColor("secondary");
        setShowNav(true);
    };

    return (<div id="Result">
        <h1>{currentLanguage.resultPage.title}</h1>
        <div id="main">
            <div id="depression" className="mainPoint">
                <h3>{currentLanguage.resultPage.depressionLabel}:</h3>
                <h2 className={depressionColor}>{depressionLevel}</h2>
                <CircularProgress color={depressionColor} variant="determinate" value={depressionPercent} thickness={5} size={150}/>
                <p className={depressionColor}>{depressionScore}</p>
            </div>

            <div id="anxiety" className="mainPoint">
                <h3>{currentLanguage.resultPage.anxietyLabel}:</h3>
                <h2 className={anxietyColor}>{anxietyLevel}</h2>
                <CircularProgress color={anxietyColor} variant="determinate" value={anxietyPercent} thickness={5} size={150}/>
                <p className={anxietyColor}>{anxietyScore}</p>
            </div>

            <div id="stress" className="mainPoint">
                <h3>{currentLanguage.resultPage.stressLabel}:</h3>
                <h2 className={stressColor}>{stressLevel}</h2>
                <CircularProgress color={stressColor} variant="determinate" value={stressPercent} thickness={5} size={150}/>
                <p className={stressColor}>{stressScore}</p>
            </div>
        </div>

        <div id="advice">
            <div className="advice">
                <h2>{currentLanguage.resultPage.depressionLabel}: <span className={depressionColor}>{depressionLevel}</span></h2>
                <div id="body">
                    <LazyLoadImage placeholder={<CircularProgress/>} src={depressionImg} alt="reaction"/>
                    <p>{depressionTips}</p>
                </div>
            </div>

            <div className="advice">
                <h2>{currentLanguage.resultPage.anxietyLabel}: <span className={anxietyColor}>{anxietyLevel}</span></h2>
                <div id="body">
                    <LazyLoadImage placeholder={<CircularProgress/>} src={anxietyImg} alt="reaction"/>
                    <p>{anxietyTips}</p>
                </div>
            </div>

            <div className="advice">
                <h2>{currentLanguage.resultPage.stressLabel}: <span className={stressColor}>{stressLevel}</span></h2>
                <div id="body">
                    <LazyLoadImage placeholder={<CircularProgress/>} src={stressImg} alt="reaction"/>
                    <p>{stressTips}</p>
                </div>
            </div>
        </div>
        <Button id="returnButton" variant="contained" onClick={() => goMain()}>
            {currentLanguage.resultPage.returnButton}
        </Button>
    </div>)
}