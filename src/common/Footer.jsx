import { Link, useLocation } from "react-router";
import { ArrowUpOnSquareStackIcon, ArrowUpOnSquareIcon, ChartBarIcon } from "@heroicons/react/16/solid";

const Footer = () => {

    const location = useLocation();
    const inResume = location.pathname.indexOf('resume') > -1;
    const inDetail = !inResume && location.pathname.startsWith('/detail');
    const inSimple = !inResume && !inDetail;

    return (
        <footer className="footer-container">
            <Link to="/">
                <div>
                    {!inSimple && <ArrowUpOnSquareIcon className="icon"/>}
                    {inSimple && <ArrowUpOnSquareIcon className="icon-shadow"/>}
                </div>
            </Link>
            <Link to="/detail">
                <div>
                    {!inDetail && <ArrowUpOnSquareStackIcon className="icon"/>}
                    {inDetail && <ArrowUpOnSquareStackIcon className="icon-shadow"/>}
                </div>
            </Link>
            <Link to="/detail/resume">
                <div>
                    {!inResume && <ChartBarIcon className="icon"/>}
                    {inResume && <ChartBarIcon className="icon-shadow"/>}
                </div>
            </Link>
        </footer>
    )
}

export default Footer;