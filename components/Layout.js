import { Content } from "./Content.js"
import { Box } from "./Box.js";
import Home from "../pages/index.js";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";

export const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}