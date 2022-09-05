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
        myHeaders.append("Authorization", "Bearer BQADlJW6Gt9M5legzMqcFuaQJvE7W-SsxaxPmfhZFgrgeuzupRG96Jsj4J-xDKoHJ4PyuwrGicLDTaOYTAAiMvIJ45GkXxqvFJzUKiEBuOYHJK0anN53k_LFdTWrdH6ZAx_Q58ZvEojeeollh6w2SR7uh7PEtwbNgK2YaL-CMhkA2DlQeUGQzU4ZXpjOmF4");

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