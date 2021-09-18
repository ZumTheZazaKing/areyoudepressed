import { Context } from "../Contexts/Context";

import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import Image1 from '../Images/mainImage1.jpeg';
import Image2 from '../Images/mainImage2.jpeg';
import Image3 from '../Images/mainImage3.jpeg';
import Image4 from '../Images/mainImage4.jpeg';
import Image5 from '../Images/mainImage5.jpeg';
import Image6 from '../Images/mainImage6.jpeg';
import Image7 from '../Images/mainImage7.jpeg';
import Image8 from '../Images/mainImage8.jpeg';
import Image9 from '../Images/mainImage9.jpeg';
import Image10 from '../Images/mainImage10.jpeg';
import Image11 from '../Images/mainImage11.jpeg';
import Image12 from '../Images/mainImage12.jpeg';
import Image13 from '../Images/mainImage13.jpeg';
import Image14 from '../Images/mainImage14.jpeg';
import Image15 from '../Images/mainImage15.jpeg';

import Button from '@material-ui/core/Button';

export function Main(){

    let { currentLanguage, setShowNav } = useContext(Context);

    const history = useHistory();

    const takeTest = () => {
        history.push("/rules");
        setShowNav(false);
    }

    let [image, setImage] = useState(Image1);
    let [imageIndex, setImageIndex] = useState(0);

    const images = [
        Image1,Image2,Image3,Image4,Image5,Image6,Image7,Image8,Image9,Image10,
        Image11,Image12,Image13,Image14,Image15
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            if(imageIndex === images.length-1){
                setImageIndex(0);
                setImage(images[0]);
            } else {
                setImageIndex(++imageIndex);
                setImage(images[imageIndex]);
            }
            console.log(imageIndex)
        },10000)
        return () => clearInterval(interval);
    });

    return (<div id="Main" style={{backgroundImage:`url(${image})`}}>
        <div id="point">
            <p id="title">{currentLanguage.mainPage.title}</p>
            <p>{currentLanguage.mainPage.description}</p>
            <Button id="button" variant="contained" onClick={() => takeTest()}>
                {currentLanguage.mainPage.button}
            </Button>
        </div>
    </div>)
}