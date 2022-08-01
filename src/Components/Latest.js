import { useEffect, useState } from "react";
import '../App.css'
import Cards from "./Music-Card"


export default function Body(){

    const [datas, setData] = useState([])
    const [likedSong, setLikedSong] = useState([]) 

    useEffect(()=>{
        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer BQAk-zE28PpCIu72r60pAXbYGKOhRKfWLBtf8X3RRW9OsR3bj0ErvzXfgj3L3WzTiXs8Q2tRbl2SscsoTo9EZxqmY9sNvrVAISE88vbxUdnNMuppKYQ_MuL8xK5ZA_P954-cpHnRBDYHNn4AKgQ0hDmeU2HUB-MtQ_FB0ltWgPDyw80rpSEEWOW390VnrM0");

        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        
        fetch("https://api.spotify.com/v1/browse/new-releases?country=NG&limit=50&offset=5" , requestOptions)
        .then(response => response.json())
        .then(result => setData(result.albums.items))
        .catch(error => console.log('error', error))
    },[])
    const cardsData = datas.map(data=> 
    <Cards 
    key={data.id}
    id={data.id}
    image={data.images[0].url}
    title={data.name}
    artist={data.artists[0].name}
    release = {data.release_date}
    play={data.external_urls.spotify}
    isFavorite = {false}
    setLikedSong = {setLikedSong}
    likedSong={likedSong}
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