import React from "react";
import logo from "../assets/music-logo.svg"
import '../App.css'
import Navigate from "./Hamburger"

export default function Header(){
    return(
        <header>
            <img src={logo} alt="logo" className="logo"/>
            <h1 className="home">MUSIC</h1>
            <Navigate />
        </header>
    )
}