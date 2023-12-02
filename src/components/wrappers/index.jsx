import React from "react";
import { Outlet } from "react-router-dom";
import TopBar from "../headers/topbar/topbar";
import Header from "../headers/header/header";
import Footer from "../footer/footer";
import { useEffect } from "react";
import BottomNavigation from "../cards/bottom_navigation";
// import { BottomNavigation } from "@mui/material";



export default function Wrapper() {

    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);

    return (
        <>
            <TopBar />
            <Header />
            <Outlet />
            <Footer />
            <BottomNavigation />
        </>
    );
}