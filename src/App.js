// App.js
import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import PlaidLinkButton from "./PlaidLinkButton"; // Import the component

function App() {
  const [linkToken, setLinkToken] = useState(null);

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
        {linkToken && <PlaidLinkButton token={linkToken} />}
      </main>
    </div>
  );
}

export default App;
