import React from 'react';
import './App.css';
import CohortDetails from './CohortDetails';

function App() {
  return (
    <div>
      <h2>My Academy Dashboard</h2>
      <CohortDetails name="React Bootcamp" trainer="Nihitha" status="ongoing" />
      <CohortDetails name="Java FSD" trainer="Shiva" status="completed" />
      <CohortDetails name="Python ML" trainer="Sneha" status="completed" />
    </div>
  );
}

export default App;
