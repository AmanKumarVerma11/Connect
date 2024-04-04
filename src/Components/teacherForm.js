import React, { useState } from 'react';
import '../styles/form.css';
import Header from './header';
import Footer from './footer';

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

    const handleSubjectChange = (e) => {
        setSubject(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here

        if( password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        console.log('Form submitted:', { name, email, password, subject });
    };

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
                    <select className='form-input' value={subject} onChange={handleSubjectChange}>
                        <option disabled className='option' value='Choose a subject'>Choose a subject</option>
                        <option className='option' value='OS'>Operating Systems</option>
                        <option className='option' value='CN'>Computer Network</option>
                        <option className='option' value='Maths'>Discrete Mathematics</option>
                        <option className='option' value='SD'>System Design</option>
                        <option className='option' value='DSA'>Data Structure & Algorithms</option>
                        <option className='option' value='DBMS'>Database Management System</option>
                        <option className='option' value='DWDM'>Data Warehousing and Data Mining</option>
                        <option className='option' value='MCA'>Microprocessor & Computer Architecture</option>
                        <option className='option' value='DAA'>Design & Analysis of Algorithms</option>
                        <option className='option' value='SE'>Software Engineering</option>
                        <option className='option' value='AI'>Artificial Intelligence</option>
                        <option className='option' value='ML'>Machine Learning</option>
                        <option className='option' value='DL'>Deep Learning</option>
                        <option className='option' value='CC'>Cloud Computing</option>
                        <option className='option' value='BD'>Big Data</option>
                        <option className='option' value='IoT'>Internet of Things</option>
                        <option className='option' value='BC'>Blockchain</option>
                        <option className='option' value='Cyber'>Cyber Security</option>
                        <option className='option' value='VR'>Virtual Reality</option>
                        <option className='option' value='AR'>Augmented Reality</option>
                        <option className='option' value='5G'>5G Technology</option>
                        <option className='option' value='RF'>Radio Frequency</option>
                        <option className='option' value='DSP'>Digital Signal Processing</option>
                        <option className='option' value='VLSI'>VLSI Design</option>
                        <option className='option' value='ES'>Embedded Systems</option>
                        <option className='option' value='RT'>Real Time Systems</option>
                        <option className='option' value='CD'>Compiler Design</option>
                        <option className='option' value='TOC'>Theory of Computation</option>
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

export default TForm;
