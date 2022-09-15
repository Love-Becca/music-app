import React, { useState,useEffect } from "react";
import logo from "../assets/music-logo.svg"
import '../App.css'
import Navigate from "./Hamburger"
import {Outlet} from 'react-router-dom';

export default function Header(){
    const [display, setdisplay] = useState("HOME");
    const navTitle =  {
        music:"music",
        quote:"quotes",
        events: "events",
        collection: "collection"
    }
// need to clean this up
    useEffect(() => {
        for (const items in navTitle) {
            if (Object.hasOwnProperty.call(navTitle, items)) {
                if (window.location.href.includes(navTitle[items])) {
                    setdisplay(navTitle[items])
                    
                }
            }
        }
    }, []);
    return (
        <header>
            <div className={display==="HOME"? "home-header":"header"}>
                <img src={logo} alt="logo" className="logo"/>
                <h1 className="home">{display}</h1>
                <div className={display==="HOME"? "no-nav":"yes-nav"}>
                    <Navigate />
                </div>
            </div>
            <Outlet />
        </header>
    );
}