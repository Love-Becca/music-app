import React, { useState } from 'react';

const Home = () => {
    const maxLength = '15'
    const[form, setForm] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password: ""
    })

    function handleChange(event){
        const {name, value} = event.target
        setForm(prevForm=>{
            return{
                ...prevForm,
                [name]:value
            }
        })

        console.log(form);
    }

    function handleSubmit(event){
        event.preventDefault()
        if(form.email === "" || form.password===""){
            window.alert("write something")
        }
    }
    return ( 
    <main>
        <div className='form'>
            <form onSubmit={handleSubmit}>
                <label htmlFor='first-name'>First Name:</label>
                <input 
                    type='text' 
                    name='firstName' 
                    id='first-name'
                    placeholder='Type your name'
                    onChange={handleChange}
                    value={form.firstName} 
                    maxLength={maxLength}          
                />
                <label htmlFor='last-name'>Last Name:</label>
                <input 
                    type='text' 
                    name='lastName' 
                    id='last-name'
                    placeholder='Type your name'
                    onChange={handleChange}
                    value={form.lastName}
                    maxLength={maxLength}
                />
                <label htmlFor='email'>Email:</label>
                <input 
                    type='email' 
                    name='email'
                    id='email' 
                    placeholder='Type your email'
                    onChange={handleChange}
                    value={form.email}
                />
                <label htmlFor='password'>Password:</label>
                <input 
                    type='password' 
                    name='password' 
                    id='password'
                    placeholder='Type your password'
                    onChange={handleChange}
                    value={form.password}
                    minLength='5'
                    maxLength={maxLength}
                />
                <button>Sign up</button>
            </form>
        </div>
       
    </main>);
}
 
export default Home;