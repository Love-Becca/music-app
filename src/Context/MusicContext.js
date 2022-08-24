import React, { createContext, useEffect, useState} from 'react';
export const MusicContext = createContext();

const MusicContextProvider = (props) => {
    const [data, setData] = useState([])
    // used to handle side effect of api calls 
    useEffect(()=>{
        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer BQAoNr15ldf90tgPwaY-3Zmht6n37xDuo49yVSGgmM9g5TiKJAlTk3V7XRXfH4zLqL6YNA09RyeHwrUDRqITFTaaxKsv_8hpQFFtfftGBiswUScAow0gvbpR6Ib6tkhPoAjCKNY2pkGwykh33iwmncEcJki3SzMj6SgQtInpYlQ7Weik_V5tjU8bDHrrL1g");

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
        <MusicContext.Provider value={{data}}>
            {props.children}
        </MusicContext.Provider>
    );
}
 
export default MusicContextProvider;