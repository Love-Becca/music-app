import React from 'react';

const QuotesCards = ({quote}) => {
    return (
    <main className='quotes'>
        <div className='quote-container'>
            <blockquote>{quote.text}</blockquote>
            <p><cite>-{quote.author}</cite></p>
        </div>
    </main>  
    );
}
 
export default QuotesCards;