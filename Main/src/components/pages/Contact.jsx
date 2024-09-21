import './Contact.css';
import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

export default function Contact () {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    function handleInputChange(e) {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'name') {
            setName(inputValue);
        } else if (inputType === 'message') {
            setMessage(inputValue)
        }
    };

    function handleFormSubmit (e) {
        e.preventDefault();

        if (!name) {
            setErrorMessage('Name is required');
            return;
        }
        
        if (!email) {
            setErrorMessage('Email is required');
            return;
        }

        if (!message) {
            setErrorMessage('Message is required');
            return;
        }

        if (!validateEmail(email)) {
            setErrorMessage('Email is invalid');
            return;
        }

        setEmail('');
        setName('');
        setMessage('');
        console.log(name, email, message);
        setErrorMessage('Message sent!');
    };

    return (
        <div id="contact">
            <h1>Contact</h1>

            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                    Name
                </label>
                <input 
                    type="text"
                    name='name'
                    value={name}
                    onChange={handleInputChange}
                    className="form-control" id="exampleFormControlInput1" placeholder="">
                </input>
            </div>
            
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                    Email address
                </label>
                <input 
                    type="email"
                    name='email'
                    value={email}
                    onChange={handleInputChange}
                    className="form-control" id="exampleFormControlInput1" placeholder="">
                </input>
            </div>
            
            <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                    Message
                </label>
                <textarea
                    type='text'
                    name='message'
                    value={message}
                    onChange={handleInputChange}
                    className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            
            <div className='mb-3'>
                <p id='errorMessage'>{errorMessage}</p>
            </div>

            <div className='mb-3'>
                <button 
                    onClick={handleFormSubmit}
                    type="button" className="btn btn-secondary">Submit</button>
            </div>
        
        </div>
    )
}