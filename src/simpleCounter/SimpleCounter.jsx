import CounterImage from "../common/CounterImage";
import AddButton from "../common/AddButton";
import QuitButton from "../common/QuitButton";

const SimpleCounter = () => {
    return <>
        <header className="simple-counter">
            <h1>Un sushi</h1>
        </header>

        <div className="sub-title">
            <h3>Modo simple</h3>
        </div>
        
        <CounterImage />

        <div className="counter-container">
            <p>0</p>
        </div>

        <div className="button-container">
            <AddButton/>
            <QuitButton/>
        </div>
    </>
}

export default SimpleCounter;