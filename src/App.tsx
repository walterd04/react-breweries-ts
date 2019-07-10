import React from 'react';
import BreweryContainer from './components/BreweryContainer/BreweryContainer';
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';

const App: React.FunctionComponent = () => {
  const city = getCurrentCity() || "Los Angeles";

  function getCurrentCity() : string {
    return "Los Angeles";
  }

  return (
    <div className="App">
      <div className="container">
          <BreweryContainer city={ city } />
      </div>
    </div>
  );
}

export default App;
