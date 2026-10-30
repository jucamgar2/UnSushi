import ResumeLine from "./ResumeLine";
import { useEffect, useState } from "react";

const ResumeDetail = () => {
    const [detailCount, setDetailCount] = useState({counter:0});

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
        const newDetailedCounter = {
            counter:0,
            maki:0,
            uramaki:0,
            niguiri:0,
            temaki:0,
            bao:0,
            other:0
        };

        const storedCounter = localStorage.getItem('DetailedCounter');
        if(storedCounter) {
            try {
                const parsedCounter = JSON.parse(storedCounter)
                setDetailCount({
                    ...newDetailedCounter,
                    ...parsedCounter
                });
            } catch (error) {
                console.error('Failed to load the DetailedCounter: ', error);
                localStorage.removeItem('Date');
                localStorage.removeItem('DetailedCounter');
                setDetailCount(newDetailedCounter);
            }
        } else {
            setDetailCount(newDetailedCounter);
        }
    }, []);

    return <>
        <header className="simple-counter">
            <h1>Un sushi</h1>
        </header>

        <div className="sub-title">
            <h3>Resumen detallado</h3>
        </div>

        <div className="resume-lines-container">
            <ResumeLine imgSrc={"../maki.webp"} alt={"Maki"} quantity={detailCount.maki}/>
            <ResumeLine imgSrc={"../uramaki.webp"} alt={"Uramaki"} quantity={detailCount.uramaki}/>
            <ResumeLine imgSrc={"../niguiri.webp"} alt={"Niguiri"} quantity={detailCount.niguiri}/>
            <ResumeLine imgSrc={"../temaki.webp"} alt={"Temaki"} quantity={detailCount.temaki}/>
            <ResumeLine imgSrc={"../bao.webp"} alt={"Bao"} quantity={detailCount.bao}/>
            <ResumeLine imgSrc={"../other.webp"} alt={"Otro"} quantity={detailCount.other}/>
        </div>
        <div id="total" className="total-line">
            <div className="empty-line-space"></div>
            <div className="resume-line-label">
                <p>TOTAL:</p>
            </div>
            <div className="resume-line-quantity">
                <p>{detailCount.counter}</p>
            </div>
        </div>
    </>
        
}

export default ResumeDetail;