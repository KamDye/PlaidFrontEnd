import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Import any other necessary libraries or components
import './LoginPage.css'; // Make sure to create a LoginPage.css file for styling

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    // Function to handle the login logic
    const handleLogin = async (event) => {
        event.preventDefault();
        setErrorMessage(''); // Clear any previous error messages

        if (!email || !password) {
            setErrorMessage('Email and password are required.');
            return;
        }

        // Additional validation can be added here if needed

        try {
            // Add your login logic here (e.g., API call to your backend)
            // For demonstration, this is a placeholder for the actual login process
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (data.success) {
                // Navigate to the token creation component upon successful login
                navigate('/create-link-token');
            } else {
                // Handle login error (e.g., display error message)
                setErrorMessage(data.message || 'Login failed.');
            }
        } catch (error) {
            console.error('Error during login:', error);
            setErrorMessage('An error occurred during login.');
        }
    };

    return (
        <div>
            <h1>Login</h1>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            <form onSubmit={handleLogin}>
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default LoginPage;
