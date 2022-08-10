import { useContext, useState } from "react";
import '../App.css'
import Cards from "./Music-Card"
import {MusicContext} from "../Context/MusicContext"

export default function Body(){
    const {data} = useContext(MusicContext)
   
    
    
    //console.log(likedSong)

    // iterate over the data in other to return music Cards with data
    const cardsData = data.map(data=> 
    <Cards 
    key={data.id}
    song={data}
    />) 

    return(
        <main id="music">
            <div className="info">
                <h4>Featured</h4>
                <p className="new">New Release from Spotify</p>
            </div>
            <div className="cards">
                {cardsData}
            </div>
        </main>
    )
}