import React, { createContext, useEffect, useState} from 'react';
export const MusicContext = createContext();

const MusicContextProvider = (props) => {
    const [data, setData] = useState([])
    // used to handle side effect of api calls 
    useEffect(()=>{
        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer BQD5s91gNhljFDTE-9ELnEaHWMARSKE1glPTNKgWljBxIvoO61cTKN7ougVPfDFC7CxeCY9iMJhhGcM-O0eXazW1wzs1sF_nOT1ivNy8v5lSHP8cja74tLnEhcK_9gUjkRvW_73H2Rxhu4IF8onHONZnjeJ-mKPAS4kPdIX68L1zYaiNcsY4ps0qu2UXDpA");

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