import React, { useState} from "react";
import like from "../assets/like.png"
import favorite from "../assets/favorites.png"

export default function Cards({song,likedSong,setLikedSong}){
    //saves the toggle state
    const[isLike, setIsLike] = useState({
        isFavorite : false,
    }) 
    //This function checks if isLike.isFavorite is true and push the id of the song into an array
    function saved(id){
        if (!isLike.isFavorite) {
            setLikedSong(prevLikedSong=>[...prevLikedSong,id])
        }
    }
    //This function is passed into the onClick eventListener which give a like icon once a user likes a song.
    function changeImage(){
        setIsLike(prevIsLike =>{
            return {
                ...prevIsLike,
                isFavorite:!isLike.isFavorite
            }
        })
        saved(song.id)
    }
    return (
        <div>
            <img src={song.images[0].url} alt="music" className="music-image"/>
            <div className="music-details">
                <h4 className="music-title">{song.name}</h4>
                <div className="title-and-like">
                    <p className="artist">{song.artists[0].name}</p>
                    <img src={isLike.isFavorite ? favorite : like} alt="like"  className="like" onClick={changeImage}/>
                </div>
                <p className="release_date">{song.release_date}</p>
                <button className="play_Button"><a href={song.external_urls.spotify}>Click to play</a></button>
            </div>
        </div>
    )
}