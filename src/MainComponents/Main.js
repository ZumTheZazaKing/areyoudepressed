import { Context } from "../Contexts/Context";

import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import Image1 from '../Images/mainImage1.jpeg';
import Image2 from '../Images/mainImage2.jpeg';
import Image3 from '../Images/mainImage3.jpeg';
import Image4 from '../Images/mainImage4.jpeg';
import Image5 from '../Images/mainImage5.jpeg';

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

    const images = [Image1,Image2,Image3,Image4,Image5];

    useEffect(() => {
        const interval = setInterval(() => {
            if(imageIndex === images.length-1){
                setImageIndex(0);
                setImage(images[0]);
            } else {
                setImageIndex(++imageIndex);
                setImage(images[imageIndex]);
            }
        },3000)
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