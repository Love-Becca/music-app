import React, { useState, useEffect } from 'react';
import { createContext } from 'react';
import axios from 'axios';
export const EventContext = createContext();

const EventContextProvider = (props) => {
    const [event, setEvent] = useState([]);

    useEffect(() => {
        axios.get("https://event-reservation-system.herokuapp.com/api/all-events").then(res=>{
            console.log(res);
        }).catch(err=>{
            console.log(err);
        })
    }, []);
    return (  
        <EventContextProvider value={{}}>
            {props.children}
        </EventContextProvider>
    );
}
 
export default EventContext;