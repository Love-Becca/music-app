import React, { useState,useEffect,useCallback } from "react";
import logo from "../assets/music-logo.svg"
import '../App.css'
import Navigate from "./Hamburger"
import {Outlet, useLocation} from 'react-router-dom';
import { useMemo } from "react";

export default function Header(){
    const [display, setDisplay] = useState("");
    const location = useLocation();
    // need to clean this up
    const displayMemo= useMemo(()=>{
        const navTitle =  {
            music:"music",
            quote:"quotes",
            events: "events",
            collection: "collection",
        }
        for (const item in navTitle) {
            if (Object.hasOwnProperty.call(navTitle, item) &&(location.pathname.includes(navTitle[item]))){
                setDisplay(navTitle[item])
            }
        }
    },[location.pathname])


    return (
        <header>
            <div className={display==="HOME"? "home-header":"header"}>
                <img src={logo} alt="logo" className="logo"/>
                <h1 className="home">{location.pathname ==='/'?"HOME":display}</h1>
                <div className={location.pathname==="/"? "no-nav":"yes-nav"}>
                    <Navigate />
                </div>
            </div>
            <Outlet />
        </header>
    );
}