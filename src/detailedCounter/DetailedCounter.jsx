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
                setDetailCount({
                    ...newDetailedCounter,
                    ...JSON.parse(storedCounter)
                });
            } catch (error) {
                console.error('Failed to load the DetailedCounter: ', error);
                setDetailCount(newDetailedCounter);
            }
        } else {
            setDetailCount(newDetailedCounter);
        }
    }, []);

    const addMaki = () => {
        setDetailCount(prev => {
            const updated = {
                ...prev,
                maki: (prev.maki??0) + 1,
                counter: (prev.counter ?? 0) + 1
            };
            updateStorage(detailCount);
            return updated;
        })
    }

    const quitMaki = () => {
        setDetailCount(prev => {
            const updated = {
                ...prev,
                maki: (prev.maki ?? 0) > 0 ? prev.maki - 1 : 0,
                counter: (prev.maki ?? 0) > 0 ? prev.counter - 1 : (prev.counter ?? 0)
            };
            updateStorage(detailCount);
            return updated;
        })
    }

    const addUramaki = () => {
        setDetailCount(prev => {
            const updated = {
                ...prev,
                uramaki: (prev.uramaki??0) + 1,
                counter: (prev.counter ?? 0) + 1
            };
            updateStorage(detailCount);
            return updated;
        })
    }

    const quitUramaki = () => {
        setDetailCount(prev => {
            const updated = {
                ...prev,
                uramaki: (prev.uramaki ?? 0) > 0 ? prev.uramaki - 1 : 0,
                counter: (prev.uramaki ?? 0) > 0 ? prev.counter - 1 : (prev.counter ?? 0)
            };
            updateStorage(detailCount);
            return updated;
        })
    }

    const addNiguiri = () => {
        setDetailCount(prev => {
            const updated = {
                ...prev,
                niguiri: (prev.niguiri??0) + 1,
                counter: (prev.counter ?? 0) + 1
            };
            updateStorage(detailCount);
            return updated;
        })
    }

    const quitNiguiri = () => {
        setDetailCount(prev => {
            const updated = {
                ...prev,
                niguiri: (prev.niguiri ?? 0) > 0 ? prev.niguiri - 1 : 0,
                counter: (prev.niguiri ?? 0) > 0 ? prev.counter - 1 : (prev.counter ?? 0)
            };
            updateStorage(detailCount);
            return updated;
        })
    }

    const addTemaki = () => {
        setDetailCount(prev => {
            const updated = {
                ...prev,
                temaki: (prev.temaki??0) + 1,
                counter: (prev.counter ?? 0) + 1.5
            };
            updateStorage(detailCount);
            return updated;
        })
    }

    const quitTemaki = () => {
        setDetailCount(prev => {
            const updated = {
                ...prev,
                temaki: (prev.temaki ?? 0) > 0 ? prev.temaki - 1 : 0,
                counter: (prev.temaki ?? 0) > 0 ? prev.counter - 1.5 : (prev.counter ?? 0)
            };
            updateStorage(detailCount);
            return updated;
        })
    }

    const addBao = () => {
        setDetailCount(prev => {
            const updated = {
                ...prev,
                bao: (prev.bao??0) + 1,
                counter: (prev.counter ?? 0) + 2
            };
            updateStorage(detailCount);
            return updated;
        })
    }

    const quitBao = () => {
        setDetailCount(prev => {
            const updated = {
                ...prev,
                bao: (prev.bao ?? 0) > 0 ? prev.bao - 1 : 0,
                counter: (prev.bao ?? 0) > 0 ? prev.counter - 2 : (prev.counter ?? 0)
            };
            updateStorage(detailCount);
            return updated;
        })
    }

    const addOther = () => {
        setDetailCount(prev => {
            const updated = {
                ...prev,
                other: (prev.other??0) + 1,
                counter: (prev.counter ?? 0) + 1
            };
            updateStorage(detailCount);
            return updated;
        })
    }

    const quitOther = () => {
        setDetailCount(prev => {
            const updated = {
                ...prev,
                other: (prev.other ?? 0) > 0 ? prev.other - 1 : 0,
                counter: (prev.other ?? 0) > 0 ? prev.counter - 1 : (prev.counter ?? 0)
            };
            updateStorage(detailCount);
            return updated;
        })
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
            <p id="detailed-counter">{detailCount.counter}</p>
        </div>

        <div className="sushi-options-container">
            <SushiOption addCallback={addMaki} quitCallback={quitMaki} imageSrc={"maki.png"} alt={"Maki"} optionCount={detailCount.maki}/>
            <SushiOption addCallback={addUramaki} quitCallback={quitUramaki} imageSrc={"uramaki.png"} alt={"Uramaki"} optionCount={detailCount.uramaki}/>
            <SushiOption addCallback={addNiguiri} quitCallback={quitNiguiri} imageSrc={"niguiri.png"} alt={"Niguiri"} optionCount={detailCount.niguiri}/>
            <SushiOption addCallback={addTemaki} quitCallback={quitTemaki} imageSrc={"temaki.png"} alt={"Temaki"} optionCount={detailCount.temaki}/>
            <SushiOption addCallback={addBao} quitCallback={quitBao} imageSrc={"bao.png"} alt={"Bao"} optionCount={detailCount.bao}/>
            <SushiOption addCallback={addOther} quitCallback={quitOther} imageSrc={"other.png"} alt={"Other"} optionCount={detailCount.other}/>
        </div>
    
    </>
}

export default DetailedCounter;