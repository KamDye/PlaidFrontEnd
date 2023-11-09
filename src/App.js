// App.js
import React, { useState, useEffect } from "react";

import SignUpPage from "./pages/SignUpPage"
import PlaidLinkButton from "./PlaidLinkButton"; // Import the component

import "./App.css";

function App() {
  const [linkToken, setLinkToken] = useState(null);

  const handleConnectBank = () => { linkToken && <PlaidLinkButton token={linkToken} /> }
  useEffect(() => {
    // Fetch link_token from your backend here, then set it in state
    // For now, we're just setting a placeholder.
    setLinkToken("your-link-token");
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {/* You can put a navbar or a welcome message here */}
        <h1>Welcome to LucidTrade</h1>
      </header>
      {/* Main content of the app */}
      <main>
        {/* Only render PlaidLinkButton if we have a linkToken */}
        {/* <button className="connect-button" onClick={handleConnectBank}>
          Connect a Bank Account
        </button> */}
         <SignUpPage />
      </main>
    </div>
  );
}

export default App;
