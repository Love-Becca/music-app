import React, { createContext, useEffect, useState } from 'react';

export const QuotesContext = createContext()

const QuotesContextProvider = (props) => {
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch("https://type.fit/api/quotes")
        .then(response => response.json())
        .then(data => setData(data.slice(0,20)))
        .catch(err => console.error(err)) 
    })   
    
    return ( 
        <QuotesContext.Provider value={{data}}>
            {props.children}
        </QuotesContext.Provider>
    );
}
 
export default QuotesContextProvider;