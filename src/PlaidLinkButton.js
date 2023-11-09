// PlaidLinkButton.js
import React from 'react';
import { usePlaidLink } from 'react-plaid-link';

const PlaidLinkButton = ({ token }) => {
  const { open, ready, error } = usePlaidLink({
    token,
    onSuccess: (public_token, metadata) => {
      // send public_token to server
      console.log('Plaid Link onSuccess: ', public_token, metadata);
    },
    onExit: (err, metadata) => {
      // handle the case when your user exits Link
      console.log('Plaid Link onExit: ', err, metadata);
    },
    onEvent: (eventName, metadata) => {
      // optionally capture Link flow events, helpful for logging and debugging
      console.log('Plaid Link onEvent: ', eventName, metadata);
    },
  });

  return (
    <button onClick={() => open()} disabled={!ready || error}>
      Connect a bank account
    </button>
  );
};

export default PlaidLinkButton;
