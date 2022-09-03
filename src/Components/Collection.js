import React, { useContext, useState } from 'react';
import { FormContext } from '../Context/FormContext';
import '../App.css';
import MusicCollection from './MusicCollection';
import QuotesCollection from './QuotesCollection';
import { MusicContext } from '../Context/MusicContext';

const Collection = () => {
    const {values} = useContext(FormContext);
    const {data,likedSong} = useContext(MusicContext);
    const unique =likedSong.filter((item,index)=>likedSong.indexOf(item)===index);
    const [music, setMusic] = useState([]);

    for (let i = 0; i < unique.length; i++) {
        for (const item in data) {
            if (data.hasOwnProperty.call(data, item) && unique[i]===data[item].id) {
                music.push(data[item]);
            }
        }
    }

    const styles = {
        gridTemplateColumns: music.length > 3 ?"auto auto auto auto":"none",        
    }
    const musicSection = music.map(item=>
        <MusicCollection
        key={item.id}
        music = {item}
        />
    )
    return (
        <main className='collection'>
            <h2 className='guest-name'>{values.name} Favorites.</h2>
            <div className='favorite-music'>
                <div className='favorite-heading'>
                    <h3>Music</h3>
                    <p>View All</p>
                </div>
                <div className='music-section' style={styles}>
                    {musicSection}
                </div>
                <div className='slideShow'>
                    <button >&#10094;</button>
                    <button >&#10095;</button>
                </div>
            </div>
            <div className='recent-quotes-collection'>
                <div className='favorite-heading'>
                    <h3>Quotes</h3>
                    <p>View All</p>
                </div>
                <QuotesCollection />
            </div>
        </main>
    );
}
 
export default Collection;