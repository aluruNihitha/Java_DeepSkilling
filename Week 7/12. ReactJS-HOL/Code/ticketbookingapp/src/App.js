import React, { useState } from 'react';
import './App.css';
import GuestPage from './GuestPage';
import UserPage from './UserPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  let page;

  if (isLoggedIn) {
    page = <UserPage onLogout={handleLogout} />;
  } else {
    page = <GuestPage onLogin={handleLogin} />;
  }

  return (
    <div className="App">
      <div className="container">
        <h1>Flight Ticket Booking App</h1>
        {page}
      </div>
    </div>
  );
}

export default App;
