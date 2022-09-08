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
        myHeaders.append("Authorization", "Bearer BQAvRr7wA_gvS1OrKkBew5MMSpqFLxKSchstnXsYlhQL3wph7s-06DPZIqmT3ed5H9YPQzS31zt4CTAYIc6Rj1c0Xzp1MVQxka1MXXiLNgPTuFFYMpIWfUF2AvMeLqPs9FnGtUoItOQvZ9_4BdT5-NT3EJZBlVGyS13XWA5_4QvfoJK_ZPybY3NMNE-uvGw");

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