import React, { useContext, useState } from 'react';
import { FormContext } from '../Context/FormContext';
import '../App.css';
import MusicCollection from './MusicCollection';
import QuotesCollection from './QuotesCollection';
import { MusicContext } from '../Context/MusicContext';
import { useEffect } from 'react';

const Collection = () => {
    // clients data
    const {values} = useContext(FormContext);
    // liked songs
    const {data,likedSong} = useContext(MusicContext);

    //filters the liked song array to make it unique
    const unique =likedSong.filter((item,index)=>likedSong.indexOf(item)===index);


    //saves the collection music data
    const [music, setMusic] = useState(()=>{
        const savedMusic = JSON.parse(localStorage.getItem(`musicToMap`));
        return savedMusic || [];
    });

    //handles for loop
    useEffect(() => {
        for (const items of data) {
            unique.forEach(element => {
                if (element === items.id) {
                    setMusic(prevMusic=>[...prevMusic,items])
                }
            });
            
        }  
    }, []);


//filters the collection array
    const musicToMap = music.filter((item, index)=>music.indexOf(item)===index);

// saves music to localStorage
    useEffect(()=>{
        localStorage.setItem('music', JSON.stringify(musicToMap));
    },[musicToMap])

        
    const styles = {
        gridTemplateColumns: music.length > 3 ?"auto auto auto auto":"none",        
    }
    const musicSection = musicToMap.map(item=>
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