import { useEffect, useState } from "react";
import '../App.css'
import Cards from "./Music-Card"

export default function Body(){
    const [data, setData] = useState([])
    useEffect(()=>{
        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer BQCODFluloUgdquwIskAubq6N1oi0ruD9oJr88dM1YWgFHropZE-pfLnPFfmaPtzQWdgE0hwrPRLU2Ld_paGhkwpDywh9NecvvXdy2Pw_nZAj_csBfVCoD1VX9MPtlIKxs5g5ZW0Pd9fM9hkYvbA1hFUwkVkxb7uwM2ZBM8PhgPSLLKuoG8D8Hg9dkBC2zc");

        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("https://api.spotify.com/v1/browse/new-releases?country=US&limit=50&offset=5", requestOptions)
        .then(response => response.json())
        .then(result => setData(result.albums.items))
        .catch(error => console.log('error', error))
    },[])
 
    const cardsData = data.map(data=> 
    <Cards 
    key={data.id}
    image={data.images[0].url}
    title={data.name}
    artist={data.artists[0].name}
    release = {data.release_date}
    play={data.external_urls.spotify}
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