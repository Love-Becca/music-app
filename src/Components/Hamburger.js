import React, { useState } from "react";
import '../App.css'
import {NavLink} from 'react-router-dom'

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
                    <NavLink to='/' className={({isActive}) =>isActive? 'active': 'link'}><li>Home</li></NavLink> 
                    <NavLink to='music' className={({isActive}) =>isActive? 'active': 'link'}><li>Music</li></NavLink>
                    <NavLink to='quotes' className={({isActive}) =>isActive? 'active': 'link'}><li>Quotes</li></NavLink>
                    <NavLink to='events' className={({isActive}) =>isActive? 'active': 'link'}><li>Events</li></NavLink>
                    <NavLink to='collect' className={({isActive}) =>isActive? 'active': 'link'}><li>collection</li></NavLink>
                </ul>
            </div>
            
        </nav>
    )
}