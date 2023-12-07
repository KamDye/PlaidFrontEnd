// PlaidLinkButton.js
import React from 'react';
import { usePlaidLink, PlaidLinkOptions, PlaidLinkOnSuccess } from 'react-plaid-link';
import { useSelector } from 'react-redux';
import "./PlaidLinkButton.css"
import { useNavigate } from 'react-router-dom';


const PlaidLinkButton = () => {
  const navigate = useNavigate();
  const id = useSelector((state) => state.id.id);
  const linkToken = useSelector((state) => state.linkToken.linkToken);
  const { open, ready, error } = usePlaidLink({
    token: linkToken,
    onSuccess: async (public_token, metadata) => {
      // send public_token to server
      console.log('Entered API what is it public token', public_token);
      console.log('Entered API what is the ID', id);
      const response = await fetch('http://localhost:8080/api/omnis/token/public_exchange/get_products', {
      method: 'POST',
      //mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        publicToken: public_token,
        id: id,
      }),
    });
    // const data = await response.json();
    // console.log(data)
      console.log('Plaid Link onSuccess: ', public_token, metadata);
      navigate('/displayScore');
    },
    onExit: async (err, metadata) => {
      // handle the case when your user exits Link
          // Save data from the onExit handler
    // supportHandler.report({
    //     error: error,
    //     institution: metadata.institution,
    //     link_session_id: metadata.link_session_id,
    //     plaid_request_id: metadata.request_id,
    //     status: metadata.status,
    //   });
      console.log('Plaid Link onExit: ', err, metadata);
    },
    onEvent: async (eventName, metadata) => {
      // optionally capture Link flow events, helpful for logging and debugging
    //   onEvent: (eventName, metadata) => {
    //     // send event and metadata to self-hosted analytics
    //     analytics.send(eventName, metadata);
    //   },
      console.log('Plaid Link onEvent: ', eventName, metadata);
    },
  });

  return (
    <button 
      onClick={() => open()} 
      disabled={!ready || error}
      className="plaid-link-button">
      Connect a bank account
    </button>
  );
};

export default PlaidLinkButton;