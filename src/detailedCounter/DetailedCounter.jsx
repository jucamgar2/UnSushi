import CounterImage from "../common/CounterImage";
import SushiOption from "./SushiOption";
import { useState, useEffect } from "react";

const DetailedCounter = () => {
    const [detailCount, setDetailCount] = useState({counter:0});

    return <>
        <header className="simple-counter">
            <h1>Un sushi</h1>
        </header>

        <div className="sub-title">
            <h3>Modo detallado</h3>
        </div>

        <CounterImage count={detailCount.counter} />

        <div className="counter-container-detail">
            <p>{detailCount.counter}</p>
        </div>

        <div className="sushi-options-container">
            <SushiOption imageSrc={"maki.png"} alt={"Maki"}/>
            <SushiOption imageSrc={"uramaki.png"} alt={"Uramaki"}/>
            <SushiOption imageSrc={"niguiri.png"} alt={"Niguiri"}/>
            <SushiOption imageSrc={"temaki.png"} alt={"Temaki"}/>
            <SushiOption imageSrc={"bao.png"} alt={"Bao"}/>
            <SushiOption imageSrc={"other.png"} alt={"Other"}/>
        </div>
    
    </>
}

export default DetailedCounter;