import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import frameImage from '../assets/Frame.jpg';
import groupImage from '../assets/Group.jpg';
import '../styles/LoginForm.scss';

function LoginForm({ onLogin }) { 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const login = async (event) => {
        event.preventDefault(); 
        if (email === "" || password === "") {
            return;
        }
        try {
            const response = await fetch('http://localhost:8000/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log(data.token, "response.data.token");

            if (data.token) {
                setToken(data.token);
                navigate('/home.jsx');
            } else {
                throw new Error('Invalid token received');
            }
        } catch (error) {
            alert('Invalid credentials');
            console.error('Error:', error);
            setError('Invalid credentials, please try again.');
        }
    };

    return (
        <div className="login-background">
            <div className="login-container">
                {/* <div className="login-left">
                    <img src={frameImage} alt="Welcome Illustration" className="login-illustration" />
                </div> */}
                <div className="login-right1">
                    <div className="login-right">
                        <h2>Welcome</h2>
                        {error && <div className="error">{error}</div>}
                        <div className="sign-in-container">
                            <img src={groupImage} alt="User Icon" className="user-icon" />
                            <form>
                                <div className="input-group">
                                    <label htmlFor="email">Email</label>
                                    <div className="input-icon">
                                        <FontAwesomeIcon icon={faUser} />
                                        <input type="text" id="email" name="email" placeholder="Email" 
                                            value={email} onChange={(e) => setEmail(e.target.value)} 
                                        />
                                    </div>
                                </div>
                                <div className="input-group">
                                    <label htmlFor="password">Password</label>
                                    <div className="input-icon">
                                        <FontAwesomeIcon icon={faLock} />
                                        <input 
                                            type="password" id="password" name="password" placeholder="Password"
                                             value={password} onChange={(e) => setPassword(e.target.value)} 
                                        />
                                    </div>
                                </div>
                                <button className="login-button" onClick={login}>LOGIN</button>
                            </form>
                            <button className="forgot-password">Forgot Password?</button>
                            <div className="signup-container">
                                <span>No account yet? </span>
                                <button className="signup-button">SIGN UP NOW</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;
