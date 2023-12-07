import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setLinkToken } from './redux/actions/linkTokenActions';


function CreateLinkToken() {
    const [isLoading, setIsLoading] = useState(true); // State to track loading status
    const navigate = useNavigate();
    const id = useSelector((state) => state.id.id);
    const linkToken = useSelector(state => state.linkToken.linkToken);
    const dispatch = useDispatch();
    
    useEffect(() => {
        const createToken = async () => {
            setIsLoading(true); // Set loading to true when the token creation starts
            try {
                console.log("This is the ID inside Create Link token", id)
                // Replace with your token creation logic (API call to your backend, etc.)
                const response = await fetch('http://localhost:8080/api/omnis/token/create_payroll_linktoken', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({id:id})
                });
                const data = await response.json();
                if (data) {
                    dispatch(setLinkToken(data));
                } else {
                    // Handle errors or no token scenario
                    console.error('No link token received');
                }
            } catch (error) {
                console.log('Error creating link token:', error);
            }
            setIsLoading(false); // Set loading to false when the token creation is completed or failed
        };

        createToken();
    }, []);

    useEffect(() => {
        if (linkToken) {
            // Navigate to PlaidLinkButton with the link token
            navigate('/plaid-link-button', { state: { linkToken } });
        }
    }, [linkToken, navigate]);

    return (
        <div>
            {isLoading ? (
                <p>Creating Plaid Link Token... Please wait.</p> // Loading message
            ) : (
                <p>Redirecting to Plaid...</p> // Message displayed after token creation
            )}
        </div>
    );
}

export default CreateLinkToken;
