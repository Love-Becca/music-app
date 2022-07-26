import React, { useEffect, useState } from "react";
import like from "../assets/like.png"
import favorite from "../assets/favorites.png"

export default function Cards(props){
    const clickedId = props.id
    const[isLike, setIsLike] = useState({
        isFavorite : props.isFavorite,
    }) 

    const setLikedSong = props.setLikedSong

    function saveLiked(){
        setLikedSong([...props.likedSong, {props}])

        // or write it as
        // setLikedSong(prevState => [...prevState, {props}])

        // the above is the same as 

        // setLikedSong(prevLikedSong=>{
        //     return[
        //         ...prevLikedSong,
        //         {props}
        //     ]
        // }])

        // if your code is one line a return statement is not needed yeah? 
    }

    useEffect(() => {
        console.log(props.likedSong) 
    }, [props.likedSong])

    

    function changeImage(){
        setIsLike(prevIsLike =>{
            return {
                ...prevIsLike,
                isFavorite:!isLike.isFavorite
            }
        })
        saveLiked()
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