import React, { useState,useCallback} from "react";
import like from "../assets/like.png"
import favorite from "../assets/favorites.png"

export default function Cards({song,likedSong,setLikedSong}){
    //saves the toggle state
    const[isLike, setIsLike] = useState({
        isFavorite : false,
    }) 

    //This function checks if isLike.isFavorite is true and push the id of the song into an array
    function saved(id){
        !isLike.isFavorite ? setLikedSong(prevLikedSong=>[...prevLikedSong,id]) : setLikedSong(likedSong.filter(item=>item !== id));
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

    const [toggle, setToggle] = useState({
        isOpen: false
    });

    // to toggle the height of the content
    const size = useCallback(() => {
        setToggle(prevToggle=>{
            return{
                ...prevToggle,
                isOpen: !toggle.isOpen
            }
        })
    }, [toggle.isOpen]);
    
    return (
        <div>
            <img src={song.images[0].url} alt="music" className="music-image"/>
            <div className={toggle.isOpen?"music-details-open":"music-details"} onClick={size}>
                <h4 className="music-title">{song.name}</h4>
                <div className="title-and-like">
                    <p className="artist">{song.artists[0].name}</p>
                    <img src={isLike.isFavorite ? favorite : like} alt="like"  className="like" onClick={changeImage}/>
                </div>
                <p className="release_date">{song.release_date}</p>
                <button className="play_Button"><a href={song.external_urls.spotify} title="Spotify">Click to play</a></button>
            </div>
        </div>
    )
}