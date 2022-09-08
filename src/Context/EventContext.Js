import React, { useState, useEffect } from 'react';
import { createContext } from 'react';
import axios from 'axios';
export const EventContext = createContext();

const EventContextProvider = (props) => {
    const [event, setEvent] = useState([]);

    useEffect(() => {
        axios.get("https://event-reservation-system.herokuapp.com/api/all-events").then(res=>{
            setEvent(res.data.data.events);
        }).catch(err=>{
            console.log(err);
        })
    }, []);
    
    return (  
        <EventContext.Provider value={{event}}>
            {props.children}
        </EventContext.Provider>
    );
}
 
export default EventContextProvider;