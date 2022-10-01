import React, { createContext, useEffect, useState} from 'react';
export const MusicContext = createContext();

const MusicContextProvider = (props) => {
    //Saves Api Data
    const [data, setData] = useState(()=>{
        const savedData = localStorage.getItem('data');
        return savedData ? JSON.parse(savedData): [];
    });

    useEffect(() => {
        localStorage.setItem('data', JSON.stringify(data))
    }, [data]);

    //Saves liked songs
    const [likedSong, setLikedSong] = useState(()=>{
        const change = localStorage.getItem('liked');
        return change ? JSON.parse(change): [];
    });

    useEffect(() => {
        localStorage.setItem('liked', JSON.stringify(likedSong))
    }, [likedSong]);
    
    // used to handle side effect of api calls 
    useEffect(()=>{
        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer BQA1hromkUOIYQOvL-24qD9_6dFnyKOY2vBC1GGEL9DFNeLhPHMyaa5ey2fsBZE4bEg0ZNtTbZ5V8DsMN71Jr8fwCJnrQZWpoA4RHSg5NuTonS4-_VUK-ld4UeHUonaPogREpxW4QzUCiVILpOEIftTC-Zap32EH1Jo3kXSjFQFUx8X9aTvO1N4xClCa-t4");

        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        
        fetch("https://api.spotify.com/v1/browse/new-releases?country=NG&limit=50&offset=0", requestOptions)
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