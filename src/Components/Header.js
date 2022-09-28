import React, { useState} from "react";
import logo from "../assets/music-logo.svg"
import '../App.css'
import Navigate from "./Hamburger"
import {Outlet, useLocation} from 'react-router-dom';
import { useMemo } from "react";

export default function Header(){
    const [display, setDisplay] = useState("");
    // to get the location
    const location = useLocation();
    //dynamic header, the title changes as user switch pages
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
    },[location.pathname]);

    const styles = {
        width: location.pathname === '/'?'100%':'15%',
    }
    const homestyles ={
        marginRight: location.pathname === '/'?'-10px':'130px'
    }
    return (
        <header>
            <div className={display==="HOME"? "home-header":"header"}>
                <img src={logo} alt="logo" className="logo" style={homestyles}/>
                <h1 className="home" style={styles}>{location.pathname ==='/'?"HOME":display}</h1>
                <div className={location.pathname==="/"? "no-nav":"yes-nav"}>
                    <Navigate />
                </div>
            </div>
            <Outlet />
        </header>
    );
}