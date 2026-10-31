import CounterImage from "../common/CounterImage";
import AddButton from "../common/AddButton";
import QuitButton from "../common/QuitButton";
import RestartButton from "../common/RestartButton";
import { useState, useEffect } from "react";
import ButtonInfo from "../common/ButtonInfo";
import ThemeToggle from "../common/ThemeToggle";

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
        const newCount = count - 1 > 0 ? count -1 : 0;
        setCount(newCount);
        updateStorage(newCount);
    }

    useEffect(()=>{
        let storageDate = localStorage.getItem('Date');
        if(storageDate){
            const now = Date.now();
            const elapsedTime = Number(now) - new Date(storageDate).getTime();
            if(elapsedTime > 24 * 60 * 60 * 1000){
                localStorage.removeItem('Date');
                localStorage.removeItem('SimpleCounter');
            }
        }
        let simpleCounter = localStorage.getItem('SimpleCounter');
        setCount(simpleCounter ? Number(simpleCounter) : 0);
    }, [])

    const restartSimpleCounter = () => {
        localStorage.removeItem('SimpleCounter')
        setCount(0);
    }

    return <>
        <header className="simple-counter">
            <h1>Un sushi</h1><ThemeToggle/>
        </header>

        <div className="sub-title">
            <h3>Modo simple</h3>
        </div>
        
        <CounterImage count={count} />

        <div className="counter-container">
            <RestartButton callback={restartSimpleCounter} />
            <p>{count}</p>
            <ButtonInfo information={"En este modo todas las piezas cuentan lo mismo"}/>
        </div>

        <div className="button-container">
            <AddButton callback={addToCount}/>
            <QuitButton callback={quitFromCount}/>
        </div>
    </>
}

export default SimpleCounter;