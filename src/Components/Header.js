import React from "react";
import logo from "../assets/music-logo.svg"
import '../App.css'

export default function Header(){
    return(
        <header>
            <img src={logo} alt="logo" className="logo"/>
            <h1 className="home">HOME</h1>
        </header>
    )
}