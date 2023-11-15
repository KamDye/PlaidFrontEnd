// PlaidLinkButton.js
import React from 'react';
import { usePlaidLink, PlaidLinkOptions, PlaidLinkOnSuccess } from 'react-plaid-link';
import { useSelector } from 'react-redux';
import "./PlaidLinkButton.css"


const PlaidLinkButton = ({  }) => {
  const id = useSelector((state) => state.id.id);
  const linkToken = useSelector((state) => state.linkToken.linkToken);
  const { open, ready, error } = usePlaidLink({
    token: linkToken,
    onSuccess: (public_token, metadata) => {
      // send public_token to server
      fetch('https://js.lucidtrades.com/api/omnis/token/public_exchange', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        public_token: public_token,
        id: id,
      }),
    });
      console.log('Plaid Link onSuccess: ', public_token, metadata);
    },
    onExit: (err, metadata) => {
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
    onEvent: (eventName, metadata) => {
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