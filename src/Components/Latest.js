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
        myHeaders.append("Authorization", "Bearer BQBn7-G2HDms2-YnwXiEJ9Orwwod4Hmq60FJ0b2z5wcDxayxsA_Se9UuamkFr67kDuvZO1u0p5cXEw6KnEM5OipaMjXCdk8W2qrYeG7QhVIntg6IyVoYwuIae9YgKnOsgMLIylNkHgxKlkzN7GhuQuA0CKYqP1xVhaf3pqkyoVH1m-fCS_o8xPkKcN9w-IM");

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