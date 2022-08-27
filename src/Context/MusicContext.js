import React, { createContext, useEffect, useState} from 'react';
export const MusicContext = createContext();

const MusicContextProvider = (props) => {
    //Saves Api Data
    const [data, setData] = useState([]);
    //Saves liked songs
    const [likedSong, setLikedSong] = useState([]);
    console.log(likedSong);
    //unique like songs 
    const collection = likedSong.filter((item,pos)=>likedSong.indexOf(item)===pos)
    console.log(collection);
    // used to handle side effect of api calls 
    useEffect(()=>{
        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer BQAfG1nAhNTkpmlx30qwB2D0JBRyNgfmpIiJcHPjc5GRe655VnHxxrjPB2Zv9-of1WSa9RIiT12KHUmmF-_otpNUr2L059MNObe8aZPKxGyKGjTIk4ycZwIsiCFJoBb51Cy_b6jie9l2W_X9hKg7ZGZmu5FVl3O4EhutXzF37Rf94LmIIc6Tucg90xTcH2I");

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
        <MusicContext.Provider value={{data,likedSong,setLikedSong,collection}}>
            {props.children}
        </MusicContext.Provider>
    );
}
 
export default MusicContextProvider;