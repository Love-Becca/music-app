import React from 'react';
import banner from '../assets/music-display.png'
import location from '../assets/location.png'
import time from '../assets/time.png'


export default function EventCards(){
    return (
        <div>
            <div className='event-date'>
                <p className='event-date-child'>Dec<br/><span className='strong'>22</span></p>
            </div>
            <div>
                <img src={banner} alt='banner' className='event-image' />
            </div>
            <div className='event-details'>
                <h2 className='event-title'>Ogun Digital Summit</h2>
                <p className='event-owner'>By Victor Adeleye</p>
                <div className='event-location'>
                    <div className='event-location-details'>
                        <p className='location-details'> Kuto Roundabout, Kuto, Abeokuta June 12 Cultural Centre</p>
                        <img src={location} alt="location"className='location'  />
                    </div>
                    <div className='event-time'>
                        <p className='event-time-details'><span>07:00PM</span> - <span>09:00PM</span></p>
                        <img src={time} alt="time" className='time'/>
                    </div>
                </div>
            </div>
        </div>
    )
}