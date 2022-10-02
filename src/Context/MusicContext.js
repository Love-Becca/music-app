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
        myHeaders.append("Authorization", "Bearer BQBi0Fb-Z713WKY2RlVTExHDiTcTSs3MGJ5ZsPjFxkTIsWCRmn6_snuj7YoIkiMCYWoEHCRNbdxeudun7nWOmcbc9lUh3BRUzdk99aKBHVwjZ0kcGf2-EPrGzwDrsxpnq9lV_J7bMQyrtMq5DRVXCaKX_BfUAS6yfE3ql13fR6dflwLVZk2f-pVd7x-iD0g");

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