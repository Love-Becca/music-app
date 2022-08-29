import React, { useContext } from 'react';
import { FormContext } from '../Context/FormContext';
import '../App.css';
import banner from "../assets/music-display.png";

const Collection = () => {
    const {values} = useContext(FormContext)
    return (
        <main className='collection'>
            <div className='favorite-music'>
                <h2 className='guest-name'>{values.name} Favorites.</h2>
                <div className='favorite-heading'>
                    <h3>Music</h3>
                    <p>View All</p>
                </div>
                <div className='favorite-music-display'>
                    <a href={'#'}><img src={banner} alt='banner' height={'200px'} width={'170px'} className='music-banner'/></a>
                    <h4 className='favorite-music-title'>Born (Remix) [feat. Cashh & King Promise]</h4>
                    <p>Adekunle Gold</p>
                </div>
            </div>
            <div className='recent-quotes-collection'>
                <div className='favorite-heading'>
                    <h3>Quotes</h3>
                    <p>View All</p>
                </div>
                <div className='recent-quotes'>
                    <img src={banner} alt='banner' height={'60px'}  width='50px'/>
                    <div className='quotes-collection'>
                        <h2><cite>Albert Einstein</cite></h2>
                        <p>Learn from yesterday, live for today, hope for tomorrow.</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
 
export default Collection;