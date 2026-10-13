import CounterImage from "../common/CounterImage";
import AddButton from "../common/AddButton";
import QuitButton from "../common/QuitButton";
import { useState, useEffect } from "react";

const SimpleCounter = () => {
    const [count, setCount] = useState(0);

    const updateStorage = (newCount) => {
        localStorage.setItem('Date', new Date())
        localStorage.setItem('SimpleCounter', newCount);
    }

    const addToCount = () => {
        const newCount = count + 1;
        setCount(newCount);
        updateStorage(newCount);
    }

    const quitFromCount = () => {
        const newCount = count - 1;
        setCount(newCount);
        updateStorage(newCount);
    }

    useEffect(()=>{
        let storageDate = localStorage.getItem('Date');
        if(storageDate){
            const now = Date.now();
            const elapsedTime = now - Number(storageDate);
            if(elapsedTime > 24 * 60 * 60 * 1000){
                localStorage.removeItem('Date');
                localStorage.removeItem('SimpleCounter');
            }
        }
        let simpleCounter = localStorage.getItem('SimpleCounter');
        setCount(simpleCounter ? Number(simpleCounter) : 0);
    }, [])

    return <>
        <header className="simple-counter">
            <h1>Un sushi</h1>
        </header>

        <div className="sub-title">
            <h3>Modo simple</h3>
        </div>
        
        <CounterImage count={count} />

        <div className="counter-container">
            <p>{count}</p>
        </div>

        <div className="button-container">
            <AddButton callback={addToCount}/>
            <QuitButton callback={quitFromCount}/>
        </div>
    </>
}

export default SimpleCounter;