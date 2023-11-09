// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom';

import SignUpPage from './pages/SignUpPage';
import PlaidLinkButton from './PlaidLinkButton';
import LoginPage from './pages/LoginPage';

import './App.css';

function App() {
  const [linkToken, setLinkToken] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showPlaidLink, setShowPlaidLink] = useState(false);

  useEffect(() => {
    // Assuming you have a way to check if the user is authenticated
    // This could be a token check or a call to your backend
    const checkAuth = async () => {
      // Your auth check logic here
      const userIsAuthenticated = true; // Replace this with actual auth check
      setIsAuthenticated(userIsAuthenticated);
      if (userIsAuthenticated) {
        await handleConnectBank();
      }
    };
    checkAuth();
  }, []);

  const dispatch = useDispatch();

  const handleConnectBank = async () => {
    try {
      // Only fetch the linkToken if it hasn't been fetched already
      const linkToken = useSelector(state => state.linkToken.linkToken);

      if (!linkToken) {
        const response = await fetch('http://localhost:3000/api/omnis/token/create');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setLinkToken(data.link_token); // Assuming the response contains an object with the link_token property
        dispatch(setId("test link token"));
      }
      // Set state to show the PlaidLinkButton
      setShowPlaidLink(true);
    } catch (error) {
      console.error('Error fetching link token:', error);
    }
  };
  
  useEffect(() => {
    // Fetch linkToken when the component mounts
    handleConnectBank();
  }, []);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Welcome to LucidTrade</h1>
          <nav>
            {!isAuthenticated && (
              <>
                <Link to="/signup">Sign Up</Link> | <Link to="/login">Login</Link>
              </>
            )}
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Navigate replace to="/signup" />} />
            <Route path="/signup" element={<SignUpPage onSignUpSuccess={handleConnectBank} />} />
            <Route path="/login" element={<LoginPage onLoginSuccess={handleConnectBank} />} />
            <Route path="/connect-bank" element={
              isAuthenticated ? (
                <div>
                  {linkToken ? (
                    <PlaidLinkButton token={linkToken} />
                  ) : (
                    <p>Loading...</p>
                  )}
                </div>
              ) : (
                <Navigate replace to="/login" />
              )
            } />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;


