import React, { useState } from 'react';
import '../styles/form.css';
import Header from './header';
import Footer from './footer';
import Select from 'react-select';

const TForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [subject, setSubject] = useState('Choose a subject');

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

    const handleSubjectChange = (selectedOption) => {
        setSubject(selectedOption);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here

        if( password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        console.log('Form submitted:', { name, email, password, subject });
    };

    const options = [
        { value: 'OS', label: 'Operating Systems' },
        { value: 'CN', label: 'Computer Network' },
        { value: 'Maths', label: 'Discrete Mathematics' },
        { value: 'SD', label: 'System Design' },
        { value: 'DSA', label: 'Data Structure & Algorithms' },
        { value: 'DBMS', label: 'Database Management System' },
        { value: 'DWDM', label: 'Data Warehousing and Data Mining' },
        { value: 'MCA', label: 'Microprocessor & Computer Architecture' },
        { value: 'DAA', label: 'Design & Analysis of Algorithms' },
        { value: 'SE', label: 'Software Engineering' },
        { value: 'AI', label: 'Artificial Intelligence' },
        { value: 'ML', label: 'Machine Learning' },
        { value: 'DL', label: 'Deep Learning' },
        { value: 'CC', label: 'Cloud Computing' },
        { value: 'BD', label: 'Big Data' },
        { value: 'IoT', label: 'Internet of Things' },
        { value: 'BC', label: 'Blockchain' },
        { value: 'Cyber', label: 'Cyber Security' },
        { value: 'VR', label: 'Virtual Reality' },
        { value: 'AR', label: 'Augmented Reality' },
        { value: '5G', label: '5G Technology' },
        { value: 'RF', label: 'Radio Frequency' },
        { value: 'DSP', label: 'Digital Signal Processing' },
        { value: 'VLSI', label: 'VLSI Design' },
        { value: 'ES', label: 'Embedded Systems' },
        { value: 'RT', label: 'Real Time Systems' },
        { value: 'CD', label: 'Compiler Design' },
        { value: 'TOC', label: 'Theory of Computation' }
    ];

    return (
        <div>
        <Header/>
        <div className='card'>
            <form className='form-container' onSubmit={handleSubmit}>
                <h1 className='form-title'>Teacher Registration</h1>
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
                    Choose Subject:
                    <Select className='form-input-select' options={options} value={subject} onChange={handleSubjectChange} isMulti />
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

export default TForm;
