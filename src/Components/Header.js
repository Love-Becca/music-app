import React, { useState,useEffect } from "react";
import logo from "../assets/music-logo.svg"
import '../App.css'
import Navigate from "./Hamburger"
import {Outlet} from 'react-router-dom';

export default function Header(){
    const [display, setdisplay] = useState("");
    const navTitle =  {
        home:"home",
        music:"music",
        quote:"quotes",
        events: "events",
        collection: "collection"
    }

    useEffect(() => {
        for (const items in navTitle) {
            if (navTitle.hasOwnProperty.call(navTitle, items)) {
                if (window.location.href.includes(navTitle[items])) {
                    setdisplay(navTitle[items])
                }
                
            }
        }
    }, []);
    return (
        <header>
            <div className="header">
                <img src={logo} alt="logo" className="logo"/>
                <h1 className="home">{display}</h1>
                <Navigate />
            </div>
            <Outlet />
        </header>
    );
}