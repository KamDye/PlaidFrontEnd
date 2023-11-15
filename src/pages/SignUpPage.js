import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setId } from '../redux/actions/idActions';
// Import any other necessary libraries or components
import "./SignUpPage.css"; // Make sure the path to the CSS file is correct

function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // For displaying error messages
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Function to handle the signup logic
  const handleSignUp = async (event) => {
    event.preventDefault();
    setErrorMessage(""); // Clear any previous error messages

    if (!email || !password || !name) {
      setErrorMessage("Name, email, and password are required.");
      return;
    }

    // Additional validation can be added here (e.g., password strength)
    console.log("We are in AYSC Function");
    try {
      // Add your signup logic here (e.g., API call to your backend)
      // For demonstration, this is a placeholder for the actual signup process

      const response = await fetch(
        "https://js.lucidtrades.com/api/omnis/account/register_login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, password }),
        }
      );

      const data = await response.json();
      console.log("This is our response data", data);
      if (data) {
        // Navigate to the token creation component upon successful signup
        dispatch(setId(data.userId));
        navigate("/create-link-token");
      } else {
        // Handle signup error (e.g., display error message)
        setErrorMessage(!data || "Signup failed.");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      setErrorMessage("An error occurred during signup.");
    }
  };

  return (
    <div>
      <h1>Sign Up</h1>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      <form onSubmit={handleSignUp}>
        <input
          type="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpPage;
