import React from 'react';
import '../App.css';
import banner from "../assets/music-display.png";

const MusicCollection = () => {
    
    return ( 
        <div className='favorite-music-display'>
            <a href={'#'}><img src={banner} alt='banner' height={'200px'} width={'170px'} className='music-banner'/></a>
            <h4 className='favorite-music-title'>Born (Remix) [feat. Cashh & King Promise]</h4>
            <p>Adekunle Gold</p>
        </div>
    );
}
 
export default MusicCollection;