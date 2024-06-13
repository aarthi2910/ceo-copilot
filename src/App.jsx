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
            axios
              .post("http://localhost:8000/user/login", {
                email: email,
                password: password,
              })
              .then(function (response) {
                console.log(response.data.token, "response.data.token");
                if (response.data.token) {
                  setToken(response.data.token);
                  setIsLoggedIn(true);
                }
              })
              .catch(function (error) {
                alert('Invalid credentials');
                console.log(error, "error");
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
