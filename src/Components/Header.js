import React, { useState } from "react";
import logo from "../assets/music-logo.svg"
import '../App.css'
import Navigate from "./Hamburger"
import {Outlet} from 'react-router-dom';

export default function Header(){
    let display;
    const[navTitle, setNavTitle] = useState({
        home:"home",
        music:"music",
        quote:"quotes",
        events: "events",
        collection: "collection"
    });

    function handleNAv() {
        for (const items in navTitle) {
            if (navTitle.hasOwnProperty.call(navTitle, items)) {
                if (window.location.href.includes(navTitle[items])) {
                    display = navTitle[items] 
                }
                
            }
        }
        
    }
    handleNAv()
    
    console.log(display);
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