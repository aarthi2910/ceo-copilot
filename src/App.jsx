import React, { useState } from 'react';  // Import useState
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import './styles/Global.scss';
import LoginForm from './pages/LoginForm';
import './pages/LoginForm.css';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = (email, password) => {
        if ((email == "") & (password == "")) {
            return;
        } else {
            fetch('http://localhost:8000/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            })
            .then(response => response.json())
            .then(data => {
                console.log(data.token, "response.data.token");
                if (data.token) {
                    setToken(data.token);
                    setIsLoggedIn(true);
                }
            })
            .catch(error => {
                alert('Invalid credentials');
                console.error('Error:', error);
            });  
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
