import { ArrowPathIcon } from "@heroicons/react/16/solid";

const RestartButton = ({callback}) => {
    return <button className="common-button restart" onClick={callback}><ArrowPathIcon className="icon"/></button>
}

export default RestartButton;