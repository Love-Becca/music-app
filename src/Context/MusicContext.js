import React, { createContext, useEffect, useState} from 'react';
export const MusicContext = createContext();

const MusicContextProvider = (props) => {
    const [data, setData] = useState([])
    // used to handle side effect of api calls 
    useEffect(()=>{
        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer BQA4tJprVsSt0OPwp1_qIvuj-FyDs0MBRwkwiTwqBV-gLUnUV8sMKMEUBblCHNFwmBoChCMSv6KeBiRsPabTDdwI6sVjgb4eGtxv7Giws_1_h-7DWunRj9kgE-O3oFH2tGw82WNGAUsReUrMRZHXS_LNAfvtDb65UEFDW3Yj9gb36xtSEk2y3JwnEcn3TlM");

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