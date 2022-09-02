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
        myHeaders.append("Authorization", "Bearer BQARBMDr1mBs0WCA3KyWqGK_IrMZNCkRnEVH3bl2baPalQPcUuyzdGu3YF6isYEpi4SbX-znl4FWgEqzRBJRr1ksQ0Ay1I6Bs5Ixt4mfGBPCzLargudg23emQh3JaDD3JPAP_bt9v4OhwKUATmaDXJ1fhZ7DhiSn-YL3rue3pCgXBA6Y8i6KJTpWSjlmPpQ");

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