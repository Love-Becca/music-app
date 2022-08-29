import React, { createContext, useEffect, useState} from 'react';
export const MusicContext = createContext();

const MusicContextProvider = (props) => {
    //Saves Api Data
    const [data, setData] = useState([]);

    //Saves liked songs
    const [likedSong, setLikedSong] = useState([]);
    console.log(likedSong);

    // used to handle side effect of api calls 
    useEffect(()=>{
        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer BQDJsFzQXdDCzVsnKKNA1IoR3OfgAtjlH6BdZ7qt6aNM1Jjw23qTKIZzRrUhK1Hc9Na-0ACTXubQuSEyzxVvR0-yQD3YFgAo1tvpwd1TNNiFqBv3ghHVTjAjRyRg99jENjOoYEQ0cIyAW8aW050JX-8n--77Nil-bCIkgOdLCny6n7DXxzWAt6BNruzVr4w");

        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        
        fetch("https://api.spotify.com/v1/browse/new-releases?country=NG&limit=50&offset=10", requestOptions)
        .then(response => response.json())
        .then(result => setData(result.albums.items))
        .catch(error => console.log('error', error))
    },[])

    return (
        <MusicContext.Provider value={{data,likedSong,setLikedSong}}>
            {props.children}
        </MusicContext.Provider>
    );
}
 
export default MusicContextProvider;