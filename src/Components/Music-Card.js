import React, { useState } from "react";
import like from "../assets/like.png"
import favorite from "../assets/favorites.png"

export default function Cards(props){
    const[isLike, setIsLike] = useState({
        isFavorite : false,
        id:props.id
    })
    const [likedSong, setLikedSong] = useState([])   

    function changeImage(){
        isLike.isFavorite ? setIsLike(prevIsLike =>({
            prevIsLike,
            isFavorite:false
        })) : setIsLike(prevIsLike =>({
            prevIsLike,
            isFavorite:true
        }));
    }
    return (
        <div>
            <img src={props.image} alt="music" className="music-image" />
            <div className="music-details">
                <h4 className="music-title">{props.title}</h4>
                <div className="title-and-like">
                    <p className="artist">{props.artist}</p>
                    <img src={isLike.isFavorite ? favorite : like} alt="like"  className="like" onClick={changeImage}/>
                </div>
                <p className="release_date">{props.release}</p>
                <button className="play_Button"><a href={props.play}>Click to play</a></button>
            </div>
        </div>
    )
}