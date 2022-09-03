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
        myHeaders.append("Authorization", "Bearer BQAI_nj8TVj_GO1F4AM46YqKe1VzGVM4n15Ey-kqnAgmNzo7iRiGxxR7zDYPzQqp3b0rQDJVO7xnWH5XsOenvw1ExVCaBJayiFy972xZ3psivpI3FEzdvoH5-ibCrUyD6YyQIXSPJSRnm6IVHZxJ0utkXwkHDdJGuH0CukYVXZ96J8HBgGGhJVQr8Ex4H5c");

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