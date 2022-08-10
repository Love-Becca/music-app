import React, { createContext, useEffect, useState} from 'react';

export const MusicContext = createContext();

const MusicContextProvider = (props) => {
    const [data, setData] = useState([])
    // used to handle side effect of api calls 
    useEffect(()=>{
        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer BQBQuJQFtVh_C6iwrGtx-lYcq5cKZ9v2dC1CZ6K4uFghZ_deq1v9CABLQaJ55bJZm3KJExy3CZaPuHg2L8iOum9QU2QM9jW1fnA24uPPHh72hcRgcnNtxXsv9-6FchoFbeg1JVB-fz2bSTvWb_xEMwrrlSVgEN5NPxXiF4ouujUHphEQpiIBHwfNV1POKYc");

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