import Footer from "./Footer";
import { Outlet } from "react-router";

const LayoutWithFooter = () => {
    return (
        <div>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default LayoutWithFooter;