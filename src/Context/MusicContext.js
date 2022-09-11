import React, { createContext, useEffect, useState} from 'react';
export const MusicContext = createContext();

const MusicContextProvider = (props) => {
    //Saves Api Data
    const [data, setData] = useState([]);
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
        myHeaders.append("Authorization", "Bearer BQCev818TazpTKsIrDtk55wvD3BERNjkpGqdhMZVHBXdirl0td-OQRSPspq_PaLJPfLnCpsRUPH2SS0MPoDMKJ0YaDf-9zxKRutDaBnnXepNZrHhtOp-Cb-7-dwpQXcqcfblNX_ZeYr-tG3-x3_ruJWLsD4XIc2SE3ZcSHu4G3TEFgS5Oz2Gb2X4edGbjRs");

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