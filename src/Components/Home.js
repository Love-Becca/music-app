import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import welcome from '../assets/welcome.jpg';
import '../App.css'
import { useNavigate } from 'react-router-dom';
import { MusicContext } from '../Context/MusicContext';

const Home = () => {
    const {setValues} = useContext(MusicContext)
    const {register, formState:{errors}, handleSubmit,getValues} = useForm()
    const onSubmit = (data) => console.log(data);
    const maxLength = '15';
    const navigate = useNavigate()

    function checkSubmit(){
        const values = getValues();
        values.name===''|| values.email===''|| values.password===''|| values.lastname==='' ? navigate('/') : navigate('/music');
        setValues(values)
    }
   
    return (
        <main className='form-page'>
            <h2 className='welcome-txt'>Welcome!</h2>
            <div className='form'> 
                <img src={welcome} alt='welcome'  className='welcome'/>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label>First Name:</label>
                    <input 
                        type='text'
                        placeholder='Type your name'
                        {...register("name", {required: true})}
                        maxLength={maxLength}          
                    />
                    <error>{errors.name?.type==='required'&&'First Name is required'}</error>
                    <label >Last Name:</label>
                    <input 
                        type='text'
                        placeholder='Type your name'
                        {...register("lastname", {required: true})}
                        maxLength={maxLength}
                    />
                    <error>{errors.lastname?.type==='required'&&'Last Name is required'}</error>
                    <label>Email:</label>
                    <input 
                        type='email' 
                        placeholder='Type your email'
                        {...register("email", {required: true, pattern:/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/})}
                    />
                    <error>{errors.email?.type==='required'&&'Email is required'}</error>
                    <error>{errors.email?.type==='pattern'&&'Entered email in wrong pattern'}</error>
                    <label>Password:</label>
                    <input 
                        type='password' 
                        placeholder='Type your password'
                        {...register("password", {required: true, minLength:5, maxLength:15})}
                    />
                    <error>
                        {errors.password?.type ==='required'&&'Enter your password'}  
                        {errors.password?.type === 'minLength'&&'Enter digit more than 5'}
                        {errors.password?.type === 'maxLength'&&'Enter digit less than 15'}
                    </error>
                    <button id='sign-in' onClick={() => checkSubmit()}>Sign up</button>
                </form>
            </div>
        </main>
    );
}
 
export default Home;