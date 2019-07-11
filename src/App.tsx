import React from 'react';
import BreweryContainer from './components/BreweryContainer/BreweryContainer';
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';

const App: React.FunctionComponent = () => {
  const city = getCurrentCity() || "Los Angeles";

  function getCurrentCity() : string {
    //TODO: update this to get current city
    return "Chambersburg";
  }

  return (
    <div className="App">
      <div className="container-fluid">
        <div className="app-full">
          <BreweryContainer city={ city } />
        </div>
      </div>
    </div>
  );
}

export default App;
