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
        myHeaders.append("Authorization", "Bearer BQDwghAZ9OR2tb1qSJwVwDRitol5Ru9xPb0e4gNtEXA1YUj0hqZeObYY9B_fA0NpJwjuJEGAwWswGKN_Xy3ArtehAS4E--p9IsYCDcg9Yr2fyXlSv9ff5fP3ig1n4xeIw9SYGEZj27Yv834wP40F1qUbEKU88-abX1k1zOwNZPwd8Ye6dYPC3jr8kQvA5DU");

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