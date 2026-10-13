import CounterImage from "../common/CounterImage";
import AddButton from "../common/AddButton";
import QuitButton from "../common/QuitButton";
import { useState } from "react";

const SimpleCounter = () => {
    const [count, setCount] = useState(0);

    const addToCount = () => {
        setCount(previousCount => previousCount + 1);
    }

    const quitFromCount = () => {
        setCount(count - 1);
    }

    return <>
        <header className="simple-counter">
            <h1>Un sushi</h1>
        </header>

        <div className="sub-title">
            <h3>Modo simple</h3>
        </div>
        
        <CounterImage />

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