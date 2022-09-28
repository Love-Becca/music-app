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
        myHeaders.append("Authorization", "Bearer BQBxDgw0djCq1w68b42SqgrKorN03-jyBz97hS7M0gq8gp4P5ayX3WPqlddxvQ8DQ8gjLDfPAxQeK1w72km-xy7ieKzy9mztuQOe6OP36FR4fpGUsQWzqmvWsASd_x1Wt_iS19N_8oUvWt06EDvGiuRjIp_Bndn0ARZoA2Rs0OOb__K9i2zm-3uWjf6Ja5w");

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