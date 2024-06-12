import React, { useState } from 'react';  // Import useState
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import './styles/Global.scss';
import LoginForm from './pages/LoginForm';
import './pages/LoginForm.css';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = (username, password) => {
        if (username === 'admin' && password === 'password') {
            setIsLoggedIn(true);
        } else {
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
