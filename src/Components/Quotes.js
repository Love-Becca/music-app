import { nanoid } from 'nanoid';
import React, { useContext } from 'react';
import { QuotesContext } from '../Context/QuotesContext';
import QuotesCards from './QuotesCards';


const Quotes = () => {
    const {data} = useContext(QuotesContext)

    const quotes = data.map(quote=>
    <QuotesCards
        key={nanoid()}
        quote={quote}
        id={nanoid}
    />)
    return (
    <main className='quotes-main'>
        <h4>Get Motivated</h4>
        <div className='quotes-section'>
            {quotes}  
        </div>
    </main> 
    );
}
 
export default Quotes;