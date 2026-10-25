import { Link, useLocation } from "react-router";
import { useState } from "react";
import { ArrowUpOnSquareStackIcon, ArrowUpOnSquareIcon } from "@heroicons/react/16/solid";
import { ArrowUpOnSquareStackIcon as ArrowUpOnSquareStackIconOutline,  ArrowUpOnSquareIcon as ArrowUpOnSquareIconOutline} from "@heroicons/react/24/outline";

const Footer = () => {
    const [page, setPage] = useState("Simple")

    const location = useLocation();
    const inDetail = location.pathname.startsWith('/detail');

    return (
        <footer className="footer-container">
            <Link to="/" onClick={() => setPage("Simple")}>
                <div>
                    {inDetail && <ArrowUpOnSquareIcon className="icon"/>}
                    {!inDetail && <ArrowUpOnSquareIcon className="icon-shadow"/>}
                </div>
            </Link>
            <Link to="/detail" onClick={() => setPage("Detail")}>
                <div>
                    {!inDetail && <ArrowUpOnSquareStackIcon className="icon"/>}
                    {inDetail && <ArrowUpOnSquareStackIcon className="icon-shadow"/>}
                </div>
            </Link>
        </footer>
    )
}

export default Footer;