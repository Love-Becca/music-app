import React from "react";
import image from "../assets/music-display.png"

export default function Cards(){
    return (
        <div>
            <img src={image} alt="music" className="music-image" />
            <div className="music-details">
                <h4 className="music-title">DO NOT DISTURB</h4>
                <p className="artist">OMAH LAY</p>
            </div>
        </div>
    )
}