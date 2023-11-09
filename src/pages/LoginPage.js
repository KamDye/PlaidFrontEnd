import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { setId } from '../redux/actions/idActions';

import './LoginPage.css'; // Make sure to create a LoginPage.css file for styling

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
 

  const handleLogin = (event) => {
    event.preventDefault(); // Prevents the default form submit action
    // Perform login logic
    console.log('Login with:', email, password);
    dispatch(setId("test data"));
  };

  return (
    <div className="login-container">
      <h2>Login Page</h2>
      <form onSubmit={handleLogin}>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
