import React, { useState } from "react";
import '../App.css'


export default function Navigate(){
    const [toggle, setToggle] = useState({
        isOpen: false
    })

    function open(){
        setToggle(prevToggle=>{
            return{
                ...prevToggle,
                isOpen:!toggle.isOpen
            }  
        })
    }

    return(
        <nav>
            <div className={toggle.isOpen?"close":"hamburger"} onClick={open}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className={toggle.isOpen?"close-bar":"nav-box"}>
                <ul>
                    <li>Home</li>
                    <li>Music</li>
                    <li>Lifestyle</li>
                    <li>Events</li>
                    <li>Collection</li>
                </ul>
            </div>
            
        </nav>
    )
}