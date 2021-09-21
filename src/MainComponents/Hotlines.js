import { useContext } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import CircularProgress from '@mui/material/CircularProgress';

import { Context } from "../Contexts/Context";

export function Hotlines(){

    let { currentLanguage } = useContext(Context);

    const hotlines = [
        {name:"Algeria", emergency:"43", suicide:"0021 3983 2000 58", code:"dz"},
        {name:"Argentina", emergency:"911", suicide:"(54-11) 4758-2554", code:"ar"},
        {name:"Armenia", emergency:"911", suicide:"(2) 538194", code:"am"},
        {name:"Australia", emergency:"000", suicide:"131114", code:"au"},
        {name:"Bahamas", emergency:"911", suicide:"(2) 322-2763", code:"bs"},
        {name:"Barbados", emergency:"911", suicide:"(246) 4299999",code:"bb"},
        {name:"Belgium", emergency:"112", suicide:"1813", code:"be"},
        {name:"Bolivia", emergency:"911", suicide:"3911270", code:"bo"},
        {name:"Botswana", emergency:"911", suicide:"3911270", code:"bw"},
        {name:"Bulgaria", emergency:"112", suicide:"0035 9249 17 223", code:"bg"},
        {name:"Canada", emergency:"911", suicide:"1 (833) 456 4566", code:"ca"},
        {name:"China", emergency:"110", suicide:"800-810-1117", code:"cn"},
        {name:"Cyprus", emergency:"112", suicide:"8000 7773", code:"cy"},
        {name:"Denmark", emergency:"112", suicide:"4570201201", code:"dk"},
        {name:"Estonia", emergency:"112", suicide:"3726558088", code:"ee"},
        {name:"Finland", emergency:"112", suicide:"010 195 202", code:"fi"},
        {name:"France", emergency:"112", suicide:"0145394000", code:"fr"},
        {name:"Germany", emergency:"112", suicide:"08001810771", code:"de"},
        {name:"Ghana", emergency:"999", suicide:"2332 444 71279", code:"gh"},
        {name:"Guyana", emergency:"999", suicide:"223-0001", code:"gy"},
        {name:"Hong Kong", emergency:"999", suicide:"852 2382 0000", code:"hk"},
        {name:"Indonesia", emergency:"112", suicide:"1-800-273-8255", code:"id"},
        {name:"Iran", emergency:"110", suicide:"1-800-273-8255", code:"ir"},
        {name:"Ireland", emergency:"116123", suicide:"+4408457909090", code:"ie"},
        {name:"Israel", emergency:"100", suicide:"1201", code:"il"},
        {name:"Italy", emergency:"112", suicide:"800860022", code:"it"},
        {name:"Japan", emergency:"110", suicide:"810352869090", code:"jp"},
        {name:"Jordan", emergency:"911", suicide:"110", code:"jo"},
        {name:"Latvia", emergency:"113", suicide:"371 67222922", code:"lv"},
        {name:"Luxembourg", emergency:"112", suicide:"352 45 45 45", code:"lu"},
        {name:"Malaysia", emergency:"999", suicide:"(06) 2842500", code:"my"},
        {name:"Mauritius", emergency:"112", suicide:"+230 800 93 93", code:"mu"},
        {name:"Mexico", emergency:"911", suicide:"5255102550", code:"mx"},
        {name:"Netherlands", emergency:"112", suicide:"900 0113", code:"nl"},
        {name:"New Zealand", emergency:"111", suicide:"1737", code:"nz"},
        {name:"Norway", emergency:"112", suicide:"+4781533300", code:"no"},
        {name:"Philippines", emergency:"911", suicide:"028969191", code:"ph"},
        {name:"Poland", emergency:"112", suicide:"5270000", code:"pl"},
        {name:"Portugal", emergency:"112", suicide:"8 96 898 21 50", code:"pt"},
        {name:"Romania", emergency:"112", suicide:"0800 801200", code:"ro"},
        {name:"Russia", emergency:"112", suicide:"0078202577577", code:"ru"},
        {name:"Singapore", emergency:"999", suicide:"1 800 2214444", code:"sg"},
        {name:"Spain", emergency:"112", suicide:"914590050", code:"es"},
        {name:"South Africa", emergency:"10111", suicide:"0514445691", code:"za"},
        {name:"South Korea", emergency:"10111", suicide:"(02) 7158600", code:"kr"},
        {name:"Sweden", emergency:"112", suicide:"46317112400", code:"se"},
        {name:"Switzerland", emergency:"112", suicide:"143", code:"ch"},
        {name:"United Kingdom", emergency:"112", suicide:"0800 689 5652", code:"gb"},
        {name:"United States", emergency:"911", suicide:"(800) 273-8255", code:"us"}
    ]

    return (<div id="Hotlines">
        <h1>{currentLanguage.hotlinesPage.title}</h1>
        <p id="desc">{currentLanguage.hotlinesPage.description}</p>
        <br/>
        {hotlines && hotlines.map((hotline,index) => {return <div key={index} className="hotline">
            <LazyLoadImage src={`https://www.countryflags.io/${hotline.code}/shiny/64.png`} placeholder={<CircularProgress disableShrink={true}/>} alt=""/>
            <div id="main">
                <p><b>{hotline.name}</b></p>
                <p>Emergency: <a href={`tel:${hotline.emergency}`}>{hotline.emergency}</a></p>
                <p>Suicide: <a href={`tel:${hotline.suicide}`}>{hotline.suicide}</a></p>
            </div>
        </div>})}
    </div>)
}