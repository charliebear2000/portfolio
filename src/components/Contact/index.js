import React, { useState } from 'react';
import Footer from '../Footer';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
    // manage form data, empty out the initialize values
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    // deconstructing the formState object into it's named properties
    const { name, email, message } = formState;
    // error message
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            if (!isValid) {
                setErrorMessage('Your email is invalid');
            } else {
                setErrorMessage('');
            }
            // checking if name and message has input 
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        // setFormState is updating formState for the property
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value })
        }
    }
    // console.log(formState);
    // console.log('errorMessage', errorMessage)

    // form submit 
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <section className="contact-container">
            <h1 data-testid='h1tag' className="contact-header">Contact Me</h1>
            <form className="contact-form">
                <div className="input-div input">
                    <div className="label-div">
                        <label htmlFor="name">Name:</label>
                    </div>
                    <input type="text" defaultValue={name} onBlur={handleChange} name="name" />
                </div>

                <div className="input-div input">
                    <div className="label-div">
                        <label htmlFor="email">Email:</label>
                    </div>
                    <input type="email" defaultValue={email} onBlur={handleChange} name="email" />
                </div>

                <div className="input-message-div">
                    <div className="message-div input">
                        <div className="message-label">
                        </div>
                        <label htmlFor="message">Message:</label>
                    </div>
                    <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5" />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button className="submit-button" data-testid='button' type="submit" onSubmit={handleSubmit}>Submit</button>
            </form>

            <Footer />
        </section>
    );
}

export default ContactForm;