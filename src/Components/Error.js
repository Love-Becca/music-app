import React, { useEffect } from 'react';

const Error = () => {
    useEffect(()=>{
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '56c1f044c8mshf16b200333a8d91p1525a3jsn23cb2c57c7fa',
                'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com'
            }
        };
        
        fetch('https://famous-quotes4.p.rapidapi.com/random?category=all&count=50', options)
            .then(response => response.json())
            .then(response => console.table(response))
            .catch(err => console.error(err)
        );
    })
    return (  
        <main>
            <h1>This page does not exist👋</h1>
        </main>
    );
}
 
export default Error;