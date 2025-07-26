import React from 'react';
import './App.css';
import CalculateScore from './Components/CalculateScore';

function App() {
  return (
    <div>
      <CalculateScore
        name="Nihitha"
        school="ABC Public School"
        total={450}
        goal={5}
      />
    </div>
  );
}

export default App;
