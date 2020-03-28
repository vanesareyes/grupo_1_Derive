import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Panels from './Components/Panels';

function App() {
  return (
      <div>
        <Navbar />
        <div className="container mt-5">
          <h2 className="mb-4">Paneles de Control Derivè</h2>
          <div className="row">
            <Panels />
          </div>
        </div>
      </div>
  );
}

export default App;
