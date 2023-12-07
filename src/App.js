import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import CreateLinkToken from "./CreateLinkToken"; // New file to create
import CreditScoreDisplay from "./pages/creditScoreDisplay";
import PlaidLinkButton from "./PlaidLinkButton";
import logo from "./assets/transparent.png";
import "./App.css";

function App() {
  // Assume isAuthenticated state is managed here or through context/redux

  return (
    <Router>
      <div className="App">
      <header className="header">
        <img src={logo} className="logo" alt="LucidTrade Logo" />
      </header>
      <div className="main-content">
        <div className="title">
          <h1>Welcome to LucidTrade</h1>
          <p className="subtitle">Invest in your dreams with us.</p>
        </div>
        <div className="section">
          <main>
            <Routes>
              <Route path="/" element={<Navigate replace to="/signup" />} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/create-link-token" element={<CreateLinkToken />} />
              <Route path="/plaid-link-button" element={<PlaidLinkButton />} />
              <Route path="/displayScore" element={<CreditScoreDisplay  />}  />
            </Routes>
          </main>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
