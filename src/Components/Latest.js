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
        myHeaders.append("Authorization", "Bearer BQDvwJu0TPdXIYRdSiUY7uLYtbrHQ4xiQwKldTdSdoLjNUZ9BIezyb19cRTFSiTg0zfxwLk2Sq3Af4GauEbl4AzeKP8FePY4R6DebvmuunzS-NPMTrmZmB6XhTaHAe2dZsObXy0JDFeuLnsoXxUjh1HHYh-5r3ayrg7-EF63v2g5S7Gq6EPmOvusesdOksU");

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