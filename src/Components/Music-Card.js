import React, { useEffect, useState } from "react";
import like from "../assets/like.png"
import favorite from "../assets/favorites.png"

export default function Cards(props){
    const setLikedSong = props.setLikedSong
    let collection = props.likedSong
    const[isLike, setIsLike] = useState({
        isFavorite : props.isFavorite,
    }) 
    
 //This function checks if isLike.isFavorite is true and push the id of the song into and array and also check if the id is existing 
    
    function saved(id){
        if (!isLike.isFavorite) {
            setLikedSong([...collection, id])
        }

        const check= collection.filter(song=>song!==id);
        console.log(check);
    }
    //I didn't use useEffect because the goal is to push in the id only when isLike.isFavorite is true using the effect hook will push into the array an id whenever there is a change.
    //useEffect(()=>{},[collection])
 //This function is passed into the onClick eventListener which give a like icon once a user likes a song.
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