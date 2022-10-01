import { Content } from "./Content.js"
import { Box } from "./Box.js";
import Home from "../pages/index.js";
import Nav from "./Nav.js";
import Footer from "./Footer.js";

export const Layout = ({ children }) => {
    return (
        <>
            <Nav />
            {children}
            <Footer />
        </>
    )
}