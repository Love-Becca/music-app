import React, { createContext, useEffect, useState} from 'react';
export const MusicContext = createContext();

const MusicContextProvider = (props) => {
    //Saves Api Data
    const [data, setData] = useState([]);
    
    //Saves liked songs
    const [likedSong, setLikedSong] = useState([]);

    // used to handle side effect of api calls 
    useEffect(()=>{
        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer BQAwgCXMAeXQ_f1XbpKLgOVFECPLaLO5hH27oHRF4HtKsaV8GsVxjsQjxKsDKMLN3M4bJc3xjZnEyuTX5rCAUILfJbeZnfmBxbgcw56-tX5VBsItPsJLkyT0XNtjgxw62LjyNYCaEKDYhDJXDGvsL7UWZLPDedXD0JC4Z-IWWPCgdQh-a1Xv6J6D2PJ9jI8");

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