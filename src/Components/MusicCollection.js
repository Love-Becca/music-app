import React from 'react';
import '../App.css';

const MusicCollection = (props) => {
    return ( 
        <div className='favorite-music-display'>
            <a href={props.music.external_urls.spotify}><img src={props.music.images[0].url} alt='banner' height={'200px'} width={'170px'} className='music-banner'/></a>
            <h4 className='favorite-music-title'>{props.music.name}</h4>
            <p>{props.music.artists[0].name}</p>
        </div>
    );
}
 
export default MusicCollection;