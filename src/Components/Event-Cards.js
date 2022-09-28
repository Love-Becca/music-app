import React,{useState,useCallback} from 'react';
import banner from '../assets/music-display.png'
import location from '../assets/location.png'
import time from '../assets/time.png'


export default function EventCards(events){
    const [toggle, setToggle] = useState({
        isOpen: false
    });

    const show = useCallback(() => {
        setToggle(prevToggle=>{
            return{
                ...prevToggle,
                isOpen: !toggle.isOpen
            }
        })
    }, [toggle.isOpen]);

    return (
        <div>
            <div className='event-date'>
                <p className='event-date-child'>Dec<br/><span className='strong'>22</span></p>
            </div>
            <div>
                <img src={banner} alt='banner' className='event-image' />
            </div>
            <div className={toggle.isOpen?'event-details-open':'event-details'} onClick={show}>
                <h2 className='event-title'>{events.events.event_name}</h2>
                <p className='event-owner'>By {events.events.user.first_name} {events.events.user.last_name}</p>
                <div className='event-location'>
                    <div className='event-location-details'>
                        <p className='location-details'> {events.events.location}</p>
                        <img src={location} alt="location"className='location'  />
                    </div>
                    <div className='event-time'>
                        <p className='event-time-details'><span>{events.events.start_time}</span></p>
                        <img src={time} alt="time" className='time'/>
                    </div>
                </div>
            </div>
        </div>
    )
}