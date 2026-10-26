import { useState, useEffect, useRef } from "react";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

const ButtonInfo = ({information}) => {
    const [open, setOpen] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if(containerRef.current && !containerRef.current.contains(event.target)) {
                setOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return <div ref={containerRef} className="container-info">
        <button className="common-button bt-info" 
        onClick={()=>setOpen(!open)}
        aria-expanded={open}>
            <InformationCircleIcon className="icon"/>
        </button>
        {open && (
            <div className="more-info">
                <p>{information}</p>
            </div>
        )}
    </div>
}

export default ButtonInfo;