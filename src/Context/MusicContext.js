import React, { createContext, useEffect, useState} from 'react';

export const MusicContext = createContext();

const MusicContextProvider = (props) => {
    const [data, setData] = useState([])
    // used to handle side effect of api calls 
    useEffect(()=>{
        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer BQBnMQuQE5wwlA0ms8ZD4KV89W0UlkipsH1n6GBdfF3BPTf-JOeZhSGhbTC1OEtumqS0cIDHYNePxbG26PAocZDVTZ_lOGl6P9v22mCg94gH2YPakhjL_ZZM0KtHAQJv64TgZDTsf_-jAhHrqu6uHBOikymIzZA8A1EQ-js6lHKM_0qIRh0UA0XB7gTLxX0");

        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        
        fetch("https://api.spotify.com/v1/browse/new-releases?country=NG&limit=50&offset=10" , requestOptions)
        .then(response => response.json())
        .then(result => setData(result.albums.items))
        .catch(error => console.log('error', error))
    },[])

    return (
        <MusicContext.Provider value={{data}}>
            {props.children}
        </MusicContext.Provider>
    );
}
 
export default MusicContextProvider;