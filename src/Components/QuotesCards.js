import React from 'react';

const QuotesCards = (props) => {
    return (
    <main className='quotes'>
        <div className='quote-container'>
            <blockquote>{props.text}</blockquote>
            <p><cite>-{props.author}</cite></p>
        </div>
    </main>  
    );
}
 
export default QuotesCards;