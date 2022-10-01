import React from 'react';
import '../App.css';
import Cards from './Event-Cards';
import {EventsContext} from '../Context/EventsContext'
import { useContext } from 'react';


export default function Event(){
    const {event} = useContext(EventsContext);
    const eventCards = event.map(data=>
    <Cards 
    key={data.id}
    events={data}
    />) 
    return(
        <main className='event-body'>
            <div className="event">
                <h4>Featured</h4>
                <p className="event-info">Get information about events around you</p>
            </div>
            <h3 className='live-event'>Live Events</h3>
            <div className='event-grid'>
               {eventCards}
            </div>
        </main>
    )

}