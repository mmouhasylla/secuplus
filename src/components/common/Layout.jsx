import React from "react";
import TopBar from "./TopBar";
import NavBar from "./navBar";
import Footer from "./footer";
import FloatingWhatsApp from "./FloatingWhatsApp";
import "./styles/layout.css";

const Layout = ({ children, active }) => {
    return (
        <div className="page-layout">
            <TopBar />
            <NavBar active={active} />
            <main className="main-content">
                {children}
            </main>
            <Footer />
            <FloatingWhatsApp />
        </div>
    );
};

export default Layout;
