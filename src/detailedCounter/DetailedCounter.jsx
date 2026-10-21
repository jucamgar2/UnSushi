import CounterImage from "../common/CounterImage";
import SushiOption from "./SushiOption";
import { useState, useEffect } from "react";

const DetailedCounter = () => {
    const [detailCount, setDetailCount] = useState({counter:0});

    const updateStorage = (newCount) => {
        localStorage.setItem('Date', new Date())
        localStorage.setItem('DetailedCounter', newCount);
    }

    useEffect(()=>{
        let storageDate = localStorage.getItem('Date');
        if(storageDate){
            const now = Date.now();
            const elapsedTime = Number(now) - new Date(storageDate).getTime();
            if(elapsedTime > 24 * 60 * 60 * 1000){

                localStorage.removeItem('Date');
                localStorage.removeItem('DetailedCounter');
            }
        }
        let detailedCounter = localStorage.getItem('DetailedCounter');
        const newDetailedCounter = {
            counter:0,
            maki:0,
            uramaki:0,
            niguiri:0,
            temaki:0,
            bao:0,
            other:0
        };
        setDetailCount(detailedCounter ? detailedCounter : newDetailedCounter);
    }, []);

    const addMaki = () => {
        detailCount.maki = detailCount.maki ? detailCount.maki : 0;
        detailCount.maki++;
        updateStorage(detailCount);
    }

    const quitMaki = () => {
        detailCount.maki = detailCount.maki ? detailCount.maki : 0;
        detailCount.maki--;
        updateStorage(detailCount);
    }

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
            <SushiOption addCallback={addMaki} quitCallback={quitMaki} imageSrc={"maki.png"} alt={"Maki"} optionCount={detailCount.maki}/>
            <SushiOption imageSrc={"uramaki.png"} alt={"Uramaki"} optionCount={detailCount.uramaki}/>
            <SushiOption imageSrc={"niguiri.png"} alt={"Niguiri"} optionCount={detailCount.niguiri}/>
            <SushiOption imageSrc={"temaki.png"} alt={"Temaki"} optionCount={detailCount.temaki}/>
            <SushiOption imageSrc={"bao.png"} alt={"Bao"} optionCount={detailCount.bao}/>
            <SushiOption imageSrc={"other.png"} alt={"Other"} optionCount={detailCount.other}/>
        </div>
    
    </>
}

export default DetailedCounter;