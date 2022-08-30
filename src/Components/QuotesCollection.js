import React from 'react';
import '../App.css';
import banner from "../assets/music-display.png";

const QuotesCollection = () => {
    return (
        <div className='recent-quotes'>
            <img src={banner} alt='banner' height={'60px'}  width='50px'/>
            <div className='quotes-collection'>
                <h2><cite>Albert Einstein</cite></h2>
                <p>Learn from yesterday, live for today, hope for tomorrow.</p>
            </div>
        </div> 
    );
}
 
export default QuotesCollection;