// import React from 'react';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import frameImage from '../assets/Frame.jpg';
import groupImage from '../assets/Group.jpg';
import '../styles/LoginForm.scss';

function LoginForm({ onLogin }) { 
    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const login = () => {
    if ((username == "") & (password == "")) {
      return;
    } else {
      axios
        .post("http://localhost:8000/user/login", {
          username: username,
          password: password,
        })
        .then(function (response) {
          console.log(response.data.token, "response.data.token");
          if (response.data.token) {
            setToken(response.data.token);
            navigate("/home.jsx");
          }
        })
        .catch(function (error) {
          console.log(error, "error");
        });
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
              <form >
                  <div className="input-group">
                  <label htmlFor="username">Username</label>
                  <div className="input-icon">
                      <FontAwesomeIcon icon={faUser} />
                      <input type="text" id="username" name="username" placeholder="Username" 
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}/>
                  </div>
                  </div>
                  <div className="input-group">
                  <label htmlFor="password">Password</label>
                  <div className="input-icon">
                      <FontAwesomeIcon icon={faLock} />
                      <input type="password" id="password" name="password" placeholder="Password" 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}/>
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
