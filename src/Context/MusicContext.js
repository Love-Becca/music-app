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
        myHeaders.append("Authorization", "Bearer BQAeh8qZeMkOfsbMoKWd9_sHC4qNNMHFPEzYAKWqoCnKEgqEz-pLwOacnnF_rxVDqxOsxxHYxt403HRbDImRy3w1HaHlt0JGDlpDCyuOhQFjkqN0H-DYS_XsW8vUiIvC69ZPlu3CdJXWAx0hiFQeWPoMnj8N6ITfFCXgEikJQDTiRX4C0GBCl8rVnnegLgQ");

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