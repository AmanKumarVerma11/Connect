import React, {useState} from "react";
import Header from "../Components/header";
import Footer from "../Components/footer";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here

        console.log('Form submitted:', { email, password });
    };

    return (
        <div>
            <Header />
            <div className='card'>
                <form className='form-container' onSubmit={handleSubmit}>
                    <h1 className='form-title'>Login</h1>
                    <label className='form-input-label' >
                        Email:
                        <input className='form-input' type="email" value={email} onChange={handleEmailChange} />
                    </label>
                    <br />
                    <label className='form-input-label'>
                        Password:
                        <input className='form-input' type="password" value={password} onChange={handlePasswordChange} />
                    </label>
                    <br />
                    <button className='form-button' type='submit'>Login</button>
                </form>
            </div>
            <Footer />
        </div>
    );
}

export default Login;