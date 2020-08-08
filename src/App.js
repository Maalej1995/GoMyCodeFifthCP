import React from 'react';
import './App.css';
import ProfilPhoto from './profile/ProfilPhoto';
import FullName from './profile/FullName';
import Address from './profile/Address';

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{ alignContent: "left" }}>
        <ProfilPhoto />
        <div>
          <FullName />
          <Address />
        </div>
      </header>
    </div>
  );
}

export default App;
