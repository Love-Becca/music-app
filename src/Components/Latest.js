import { useEffect, useState } from "react";
import '../App.css'
import Cards from "./Music-Card"

export default function Body(){
    const [data, setData] = useState([])
    useEffect(()=>{
        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer BQAVHd03sC09I4nwxPFIUTLAwPBAUIZz1s-pYA33SQjB8ncc5aOQDQpJV5muqe8-M6jHPV7DqYBZfqZRcA_dAOHaK4bEVTMF3enhqTooc7hFAXsZ1K16fJWLaGXkSB8jE71LxZhV-W7S9YSlDOQvFuNGSnf2DXQ-0EfHgLCW9OaoDH6iD0m829-GxxI5WnQ");

        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        
        fetch("https://api.spotify.com/v1/browse/new-releases?country=NG&limit=50&offset=5", requestOptions)
        .then(response => response.json())
        .then(result => setData(result.albums.items))
        .catch(error => console.log('error', error))
    },[])
    const cardsData = data.map(data=> 
    <Cards 
    key={data.id}
    id={data.id}
    image={data.images[0].url}
    title={data.name}
    artist={data.artists[0].name}
    release = {data.release_date}
    play={data.external_urls.spotify}
    isFavorite = {true}
    />)
    console.log(data)
    return(
        <main>
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