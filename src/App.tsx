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
      <div className="container-fluid" style={ {paddingLeft: '0' } }>
        <BreweryContainer city={ city } />
      </div>
  );
}

export default App;
