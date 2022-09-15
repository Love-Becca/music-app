import React, { createContext, useEffect, useState} from 'react';
export const MusicContext = createContext();

const MusicContextProvider = (props) => {
    //Saves Api Data
    const [data, setData] = useState(()=>{
        const savedData = localStorage.getItem('data');
        return savedData ? JSON.parse(savedData): [];
    });

    useEffect(() => {
        localStorage.setItem('data', JSON.stringify(data))
    }, [data]);

    //Saves liked songs
    const [likedSong, setLikedSong] = useState(()=>{
        const change = localStorage.getItem('liked');
        return change ? JSON.parse(change): [];
    });

    useEffect(() => {
        localStorage.setItem('liked', JSON.stringify(likedSong))
    }, [likedSong]);
    
    // used to handle side effect of api calls 
    useEffect(()=>{
        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer BQDRUQF29ehdLF4GtlHBMKiquuQEo0CWyiv3KGas-XuEm1dbMmcFqvBP24uB6r63wvzAqw0pVtAEr10Akd6IW3-XaynbQr_QfmC1as_dv60Z-rGwWdNcsSMY0K3a0dO7_BGrDvHvnVPhao-aFX_LXIwc427U4yp6Wl-dbr8MoHwvc4HICZow9bapJ7yvRTg");

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