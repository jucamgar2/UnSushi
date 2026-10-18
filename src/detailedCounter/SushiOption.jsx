import AddButton from "../common/AddButton";
import QuitButton from "../common/QuitButton";

const SushiOption = ({addCallback, quitCallback, imageSrc, alt, optionCount}) => {
    
    return <div className="sushi-option">
        <div className="option-image">
            <img src={imageSrc} alt={alt}/>
        </div>
        <div className="option-count">
            <p>{optionCount}</p>
        </div>
        <div className="option-button-container">
            <AddButton callback={addCallback}/>
            <QuitButton callback={quitCallback}/>
        </div>
    </div>;
}

export default SushiOption;