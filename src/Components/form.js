import React, { useState } from 'react';
import '../styles/form.css';

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [role, setRole] = useState('student');

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

    const handleRoleChange = (e) => {
        setRole(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here

        if( password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        console.log('Form submitted:', { name, email, password, role });
    };

    return (
        <div className='card'>
            <form className='form-container' onSubmit={handleSubmit}>
                <h1 className='form-title'>Sign Up to our platform</h1>
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
                    Role:
                    <select className='form-input' value={role} onChange={handleRoleChange} > 
                        <option className='option' value='student'>Student</option>
                        <option className='option' value='mentor'>Mentor</option>
                    </select>
                </label>
                <br />
                <button className='form-button' type="submit">Sign Up</button>
            </form>
            <div className='img'>
            </div>
        </div>
    );
};

export default Form;
