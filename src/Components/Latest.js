import { useEffect, useState } from "react";
import '../App.css'
import Cards from "./Music-Card"


export default function Body(){
    // saves data from api
    const [datas, setData] = useState([])
    const [likedSong, setLikedSong] = useState([]) 
    
    // used to handle side effect of api calls 
    useEffect(()=>{
        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer BQCnYfM57T7j6v8Qfl8_PyvpkZZ7GffduxuT1QY3L0onrSrFImW4DmuYyFr_mqmb3R2grIJktdmLZjWKuxtv2UoykFpYr_csSNK-j4iD1cw8N0ebolDrnkrYm1NvteejZwzWoGq47j8QEUaZGVnp7F5nBifKc_WZoWaBBpybT--MmGZlX_W6jemuEM50mpQ");

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

    //console.log(likedSong)

    // iterate over the data in other to return music Cards with data
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