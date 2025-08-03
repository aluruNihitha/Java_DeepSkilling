import React from 'react';
import './App.css';


const officeSpaces = [
  {
    id: 1,
    name: 'Tech Park',
    rent: 50000,
    address: '123 MG Road, Bangalore',
    imageUrl: 'https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 2,
    name: 'Startup Hub',
    rent: 65000,
    address: '456 BTM Layout, Bangalore',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 3,
    name: 'CoWork Space',
    rent: 40000,
    address: '789 Koramangala, Bangalore',
    imageUrl: 'https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&w=500&q=60'
  }
];



function App() {
  return (
    <div className="App">
      {/* Heading */}
      <h1>Office Space Rental App</h1>

      {/* Rendering list of offices */}
      {officeSpaces.map((office) => (
        <div key={office.id} className="office-card">
          <h2>{office.name}</h2>
          <img src={office.imageUrl} alt={office.name} />
          <p><strong>Address:</strong> {office.address}</p>
          <p style={{ color: office.rent < 60000 ? 'red' : 'green' }}>
            <strong>Rent:</strong> ₹{office.rent}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;
