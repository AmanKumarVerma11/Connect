import React, { useState } from 'react';
import '../styles/form.css';
import Header from './header';
import Footer from './footer';

const SForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [branch, setBranch] = useState('Select Branch');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handleBranchChange = (e) => {
        setBranch(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here

        if( password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        console.log('Form submitted:', { name, email, password, branch });
    };

    return (
        <div>
        <Header/>
        <div className='card'>
            <form className='form-container' onSubmit={handleSubmit}>
                <h1 className='form-title'>Student Registration</h1>
                <label className='form-input-label'>
                    Name:
                    <input className='form-input' type="text" value={name} onChange={handleNameChange} />
                </label>
                <br />
                <label className='form-input-label' >
                    Email:
                    <input className='form-input' type="email" value={email} onChange={handleEmailChange} />
                </label>
                <br />
                <label className='form-input-label' >
                    Password:
                    <input className='form-input' type="password" value={password} onChange={handlePasswordChange} />
                </label>
                <br />
                <label className='form-input-label' >
                    Confirm Password:
                    <input className='form-input' type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
                </label>
                <br />
                <label className='form-input-label' >
                    Choose Branch:
                    <select className='form-input' value={branch} onChange={handleBranchChange}>
                        <option disabled className='option' value='Select Branch'>Select Branch</option>
                        <option className='option' value='IT'>Information Technology</option>
                        <option className='option' value='CS'>Computer Science</option>
                        <option className='option' value='ME'>Mechanical Engineering</option>
                        <option className='option' value='CE'>Civil Engineering</option>
                        <option className='option' value='EE'>Electrical Engineering</option>
                        <option className='option' value='EC'>Electronics and Communication</option>
                    </select>
                </label>
                <br />
                <button className='form-button' type="submit">Sign Up</button>
            </form>
            <div className='img'>
            </div>
        </div>
        <Footer />
        </div>
    );
};

export default SForm;