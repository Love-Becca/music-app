import { useEffect, useState } from "react";
import '../App.css'
import Cards from "./Music-Card"

export default function Body(){
    const [datas, setData] = useState([])
    useEffect(()=>{
        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer BQAtSO6TUqCC2V9YPB2s_28eHSoK9Z_BaL76tmPVExIb35C04xBLa9ne7Ay89i4xpT5Ve1zReDPmSH5a9X-5C9b6bEkpanHDS43abPThknfervglmKwZz4AenO6xTqonIcyqc90Vcg-odxvR7-daKxRqELtspYoNtt4coPHGQmiGU_lbMoT5sFYUvoYkpks");

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