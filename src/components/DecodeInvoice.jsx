import React, { useState } from 'react';
import { useAuth } from './apiTutorial/AuthContext';
import useScript from '../hooks/useScript';

export function DecodeInvoice() {
  const { paymentRequest, setPaymentRequest } = useAuth();
  const [decodedInvoice, setDecodedInvoice] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const status = useScript('/js/bolt11.min.js');
  if (status === 'loading') {
    return <p>Loading script...</p>;
  }
  if (status === 'error') {
    return <p>Error loading script.</p>;
  }

  const handleDecode = () => {
    try {
      let customNetwork;
      if (paymentRequest.startsWith('lnbc')) {
        customNetwork = {
          bech32: 'bc', // mainnet
          pubKeyHash: 0x42,
          scriptHash: 0xff,
          validWitnessVersions: [0, 2, 3, 4, 5]
        };
      } else if (paymentRequest.startsWith('lntbs')) {
        customNetwork = {
          bech32: 'tbs', // signet
          pubKeyHash: 0x42,
          scriptHash: 0xff,
          validWitnessVersions: [0, 2, 3, 4, 5]
        };
      } else {
        throw new Error('Invalid invoice prefix.');
      }

      const decoded = lightningPayReq.decode(paymentRequest, customNetwork); // Use the global object
      setDecodedInvoice(decoded);
      setErrorMessage(null);
    } catch (error) {
      setDecodedInvoice(null);
      setErrorMessage('Failed to decode invoice. Please check the format.');
    }
  };

  return (
    <div>
      <textarea
        value={paymentRequest}
        onChange={(e) => setPaymentRequest(e.target.value)}
        style={{ width: '100%', height: '5em' }} // Set height to 5 lines
        placeholder="Paste a lightning invoice"
      />
      <div style={{ marginTop: '10px' }}></div>
      <button onClick={handleDecode}>Decode</button>

      <div style={{ marginTop: '10px' }}>
        {errorMessage && <div style={{ color: 'red' }}>Error: {errorMessage}</div>}
        {decodedInvoice && (
          <div>
            <strong>Decoded invoice:</strong>
            <pre style={{ marginLeft: '10px', marginTop: '10px' }}>{JSON.stringify(decodedInvoice, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
}