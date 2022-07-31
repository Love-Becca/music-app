import React, { useEffect, useState } from "react";
import like from "../assets/like.png"
import favorite from "../assets/favorites.png"

export default function Cards(props){
    const setLikedSong = props.setLikedSong
    let collection = props.likedSong
    const[isLike, setIsLike] = useState({
        isFavorite : props.isFavorite,
    }) 
    

    function saved(id){
        if (!isLike.isFavorite) {
            setLikedSong([...collection, id])
        }
        if(collection.includes(id)){
            console.log("yes")
        }
    }

    useEffect(()=>{
        console.log(collection)
       
    },[collection])

    function changeImage(){
        setIsLike(prevIsLike =>{
            return {
                ...prevIsLike,
                isFavorite:!isLike.isFavorite
            }
        })
        saved(props.id)
        
    }


    return (
        <div>
            <img src={props.image} alt="music" className="music-image"/>
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