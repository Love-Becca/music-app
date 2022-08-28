import { useContext } from "react";
import '../App.css'
import Cards from "./Music-Card"
import {MusicContext} from "../Context/MusicContext"

export default function Body(){
    //all data in context
    const {data,likedSong,setLikedSong,values} = useContext(MusicContext)
    // iterate over the data returns music Cards with data
    const cardsData = data.map(data=> 
    <Cards 
    key={data.id}
    song={data}
    likedSong={likedSong}
    setLikedSong ={setLikedSong}
    />) 
    
    return(
        <main id="music">
            <div className="info">
                <h2>Welcome, {values.name}</h2>
                <h4>Featured</h4>
                <p className="new">New Release from Spotify</p>
            </div>
            <div className="cards">
                {cardsData}
            </div>
        </main>
    )
}