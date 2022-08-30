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
        myHeaders.append("Authorization", "Bearer BQBd4JeVLpxtfI5cGkjJaZWohXyfIe-T7AexgU6gJsLuqMbuEmsJ4HFaRQk0y5PNG_3K5ycH4lk8q979abp3VLIyFcKKgHRHE7Mc0F7txiBfOJRtbo8jivj9oBKEi7aBv8cRdk0h1YdUNvF8i554gf7AAY7euP1zq7w45tDiDaVB4oW-v_vu_yKnMTJ5pv4");

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