import React from 'react';
import BreweryContainer from './components/BreweryContainer/BreweryContainer';
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';

const App: React.FunctionComponent = () => {
  const city = getCurrentCity() || "Los Angeles";

  function getCurrentCity() : string {
    // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition((position) => {
    //     var uri = "https://maps.googleapis.com/maps/api/geocode/json?latlng=39.908147199999995,-77.7109504&key=AIzaSyBCn7UYYYzHCnv_qZ7sHY89gBbKjktRb58&sensor=false%";
    //     fetch(uri)
    //       .then((response) => {
    //         debugger;
    //       }).catch((error) => {
    //         debugger;
    //       });
    //   });
    // }
    return "Harrisburg";
  }

  return (
      // <div className="container-fluid" style={ {paddingLeft: '0' } }>
      //   <BreweryContainer city={ city } />
      // </div>
      <div className="App">
        <BreweryContainer city={ city } />
      </div>
  );
}

export default App;
