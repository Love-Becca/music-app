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
        myHeaders.append("Authorization", "Bearer BQAtvH0EmE3pB8Cu-4mpJPCwO-8vdWraelCFRj4UcysAbP41LTjFSU5X5L9HXnEXXQwuXQKVYJepDBIob82nnCk_COJyP-cR8N_0hzEPZ3sm_0sWQ-ZyaXxcs0-m21Iosk_ZKiB7ZaCKoqZHK_QCEX74L39DQjrYu_6qwMXmlyP5akXGohWKt2YTxIQ-2-Q");

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