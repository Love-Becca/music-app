import React from "react";
import like from "../assets/like.png"

export default function Cards(props){
    return (
        <div>
            <img src={props.image} alt="music" className="music-image" />
            <div className="music-details">
                <h4 className="music-title">{props.title}</h4>
                <div className="title-and-like">
                    <p className="artist">{props.artist}</p>
                    <img src={like} alt="like"  className="like"/>
                </div>
                <p className="release_date">{props.release}</p>
                <button className="play_Button"><a href={props.play}>Click to play</a></button>
            </div>
        </div>
    )
}