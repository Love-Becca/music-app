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
        myHeaders.append("Authorization", "Bearer BQCfnJy87ypa8s0GsvzXGU7VHn6oss3U7NLbeBO1cyLU1FgIq2A3R37ConNrXZAuSEs3UruVU4NCGfmvbTxLpgBswqO-m5VpPTc8FbhlYFxDZJDRvD7jZzwliLHCVnhVJhVWGmXogl8yqdBQoy8lbAQN6rqNfbaOq33nsTrITbo7UbWD23s7LnUEd-rKlk0");

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