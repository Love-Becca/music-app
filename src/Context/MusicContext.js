import React, { createContext, useEffect, useState} from 'react';
export const MusicContext = createContext();

const MusicContextProvider = (props) => {
    //Saves Api Data
    const [data, setData] = useState([]);
    console.log(data);
    //Saves liked songs
    const [likedSong, setLikedSong] = useState([]);
    console.log(likedSong);

    // used to handle side effect of api calls 
    useEffect(()=>{
        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer BQCfOGkiUzaLOzH2la7Spc8QviphicG7jWosqwAXR6V4eHb-gBx164snHjP_V41u2BIcvZfir2ih7Gk2sfi257diyVscALt2x_-2FUF5LA1LtBtYWLJdSBLy2_aH4kqtpzdxmQ-3N2qNmou5Dq0q2LwrUxuq0dNegr2DUGvbhkvw4cy_O-B5Lufay1J9S8Q");

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