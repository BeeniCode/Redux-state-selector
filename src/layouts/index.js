import React from "react";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <Navbar />
            <Alert />
            <div className="container mt-3">
                <Outlet />
            </div>
        </>
    )
}

export default Layout;