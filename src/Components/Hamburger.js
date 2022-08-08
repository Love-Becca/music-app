import React, { useState } from "react";
import '../App.css'
import {Link} from 'react-router-dom'

export default function Navigate(){
    // this handles the nav bar toggle 
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
                    <Link to='/'><li>Home</li></Link> 
                    <Link to='music'><li>Music</li></Link>
                    <li>Lifestyle</li>
                    <Link to='events'><li>Events</li></Link>
                    <li>Collection</li>
                </ul>
            </div>
            
        </nav>
    )
}