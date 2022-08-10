import React, { createContext, useEffect, useState} from 'react';

export const MusicContext = createContext();

const MusicContextProvider = (props) => {
    const [data, setData] = useState([])
    // used to handle side effect of api calls 
    useEffect(()=>{
        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer BQAcyOYnCQA91IkeHZ1s0IiHAqJVLLN_kQ-5h1BB7J_gj9nNdPbFDh1XsGjmSUX0ixKchrN3FXtEMdDZ0jkGSDfDe2yZUB5Jgi7fXlexwFruS3jMEv_KvDzMAbEKhsbs8vT1JHqNsiPZjrCfqncQr_iPTCOATl0jHSN3B0kimFsXDNHA4pxVZxpZXdu9i64");

        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        
        fetch("https://api.spotify.com/v1/browse/new-releases?country=NG&limit=50&offset=5" , requestOptions)
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