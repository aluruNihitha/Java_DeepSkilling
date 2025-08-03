import React from 'react';

function GuestPage({ onLogin }) {
  return (
    <div>
      <h2>Welcome Guest ✈️</h2>
      <p>Please browse available flights below:</p>
      <ul>
        <li><strong>Flight 101</strong>: Hyderabad → Delhi – ₹5000</li>
        <li><strong>Flight 202</strong>: Chennai → Mumbai – ₹4500</li>
        <li><strong>Flight 303</strong>: Bangalore → Kolkata – ₹5200</li>
      </ul>
      <button onClick={onLogin}>Login to Book</button>
    </div>
  );
}

export default GuestPage;
