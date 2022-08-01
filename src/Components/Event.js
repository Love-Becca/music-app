import React from 'react';
import '../App.css'
import Cards from './Event-Cards'


export default function Event(){
    return(
        <main className='event-body'>
            <div className="event">
                <h4>Featured</h4>
                <p className="event-info">Get information about events around you</p>
            </div>
            <h3 className='live-event'>Live Events</h3>
            <div className='event-grid'>
                <Cards />
            </div>
        </main>
    )

}