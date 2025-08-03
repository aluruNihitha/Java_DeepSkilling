import React, { useState } from 'react';

function CurrencyConvertor() {
  const [rupees, setRupees] = useState('');
  const [euro, setEuro] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const inr = parseFloat(rupees);
    if (!isNaN(inr)) {
      const converted = (inr / 88).toFixed(2); // Assume 1 Euro = 88 INR
      setEuro(converted);
    } else {
      alert("Please enter a valid number");
    }
  };

  return (
    <div>
      <h2>Currency Converter</h2>
      <form onSubmit={handleSubmit}>
        <label>INR:</label>
        <input
          type="text"
          value={rupees}
          onChange={(e) => setRupees(e.target.value)}
        />
        <button type="submit">Convert</button>
      </form>
      {euro && <p>Equivalent Euro: €{euro}</p>}
    </div>
  );
}

export default CurrencyConvertor;
