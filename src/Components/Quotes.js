import { nanoid } from 'nanoid';
import React, { useContext } from 'react';
import {FormContext} from '../Context/FormContext'
import { QuotesContext } from '../Context/QuotesContext';
import QuotesCards from './QuotesCards';


const Quotes = () => {
    const {data} = useContext(QuotesContext);
    const {values} = useContext(FormContext);



    const quotes = data.map(quote=>
    <QuotesCards
        key={nanoid()}
        quote={quote}
        id={nanoid}
    />)
    return (
    <main className='quotes-main'>
        <h2>Welcome, {values.name}</h2>
        <h4>Get Motivated</h4>
        <div className='quotes-section'>
            {quotes}  
        </div>
    </main> 
    );
}
 
export default Quotes;