import { useEffect, useState } from "react";
import '../App.css'
import Cards from "./Music-Card"

export default function Body(){

    const [datas, setData] = useState([])
    const [likedSong, setLikedSong] = useState([]) 

    useEffect(()=>{
        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer BQBMxpfXLEDVBNxNpNEHBcZYcu-4uO-Lr0ZleXJWSXHif5f3XZ9aAksjM5Tl3NbujhGd0E9yEcULorVYT--3fU07aSJe1fobvdtJexTnSjL9xMaes5xf2dYWT-aYJGyD3c_608EL-P-Ffsd7l4aXznTqj1j3t9yUm895IFqIjfNdn24enk_Q5vVYdwJP-BQ");

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