import React, { createContext, useEffect, useState} from 'react';
export const MusicContext = createContext();

const MusicContextProvider = (props) => {
    //Saves Api Data
    const [data, setData] = useState([]);
    
    //Saves liked songs
    const [likedSong, setLikedSong] = useState([]);
    console.log(likedSong);
    const[values, setValues] = useState({})

    // used to handle side effect of api calls 
    useEffect(()=>{
        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer BQDblEMmxNmPcgk5uewA1GUV63EGkDAaf0Xc_O_8RPZoWTLUuo1DTwsFbjpCDY-z5DAb-W0Ac1pBJQ1-IBx3QURSB5TvndiOqfXa1iZEoVYtf3AM4TmcXFhAK7rIDBi7ERUORfrlkx0C-MxqHbmNAhfWZcCaeybkv9y-OXlV3ZVyFct-CDH532W7fo2SnHs");

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
        <MusicContext.Provider value={{data,likedSong,setLikedSong,setValues, values}}>
            {props.children}
        </MusicContext.Provider>
    );
}
 
export default MusicContextProvider;