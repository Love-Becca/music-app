import React, { useState, useEffect } from 'react';
import { createContext } from 'react';
export const EventContext = createContext();

const EventContextProvider = (props) => {
    const [event, setEvent] = useState([]);

    useEffect(() => {
        
    }, []);
    return (  
        <EventContextProvider value={{}}>
            {props.children}
        </EventContextProvider>
    );
}
 
export default EventContext;