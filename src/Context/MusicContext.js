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
        myHeaders.append("Authorization", "Bearer BQABkyfyJKNtNvKpn9CC10fvzVbWnOKbcuuguxFvLPowxsViHsTB9PKpQHDDNha7RoWnSh005KrpxfmTveTEXbL9jSHVZ2GipkOCxdPALlrFm9L0naZ0yYhjtob8tiIMt5BXApxe4wQEZNgF76RgGPZSr6BdfwlRp5o-LB6r0bxlPmqALnss2aSVuRGxz_0");

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