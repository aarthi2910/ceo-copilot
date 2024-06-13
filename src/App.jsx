import React, { useState } from 'react';  // Import useState
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import './styles/Global.scss';
import LoginForm from './pages/LoginForm';
import './pages/LoginForm.css';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = async (event) => {
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
                setIsLoggedIn(true);
            } else {
                throw new Error('Invalid token received');
            }
        } catch (error) {
            alert('Invalid credentials');
        }
    };


    return (
        <div className="App">
            {isLoggedIn ? (
                <div className="main-container">
                    <Sidebar />
                    <div className="main-content">
                        <Home />
                    </div>
                </div>
            ) : (
                <LoginForm onLogin={handleLogin} />
            )}
        </div>
    );
}

export default App;
