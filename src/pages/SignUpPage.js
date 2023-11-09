import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import './SignUpPage.css'; // Make sure the path to the CSS file is correct

const SignUpPage = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
    });

    const navigate = useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        navigate('/connect-bank'); // Use the route you want to navigate to
        // try {
        //   const response = await fetch('http://localhost:3000/api/omnis/account/register', {
        //     method: 'POST',
        //     headers: {
        //       'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(formData),
        //   });
    
        //   if (!response.ok) {
        //     throw new Error(`HTTP error! status: ${response.status}`);
        //   }
    
        //   const data = await response.json();
        //   console.log('Form submitted successfully:', data);
        // } catch (error) {
        //   console.error('There was an error submitting the form:', error);
        // }
    };

    const id = useSelector(state => state.id.id);

    return (
        <div className="signup-container"> {/* Apply the CSS class here */}
            <h2>{id}</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="fullName">Full Name</label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUpPage;
