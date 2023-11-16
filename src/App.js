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
import PlaidLinkButton from "./PlaidLinkButton";
import logo from "./assets/transparent.png";
import "./App.css";

function App() {
  // Assume isAuthenticated state is managed here or through context/redux

  return (
    <Router>
      <div className="App">
        <div className="main-content">
          <h1 className="title">Welcome to LucidTrade</h1>
          <div>
            <img src={logo} className="logo" alt="LucidTrade Logo" />
          </div>
          <p className="subtitle">Invest in your dreams with us.</p>
          <main>
            <Routes>
              <Route path="/" element={<Navigate replace to="/signup" />} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/create-link-token" element={<CreateLinkToken />} />
              <Route path="/plaid-link-button" element={<PlaidLinkButton />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
