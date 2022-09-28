import React, { useState} from 'react';
import { createContext } from 'react';

export const FormContext = createContext();

const FormContextProvider = (props)=>{
    //saves the signup form details
    const[values, setValues] = useState({});
    
    return(
        <FormContext.Provider value={{setValues, values}}>
            {props.children}
        </FormContext.Provider>
    )
}

export default FormContextProvider