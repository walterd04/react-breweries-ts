import React from 'react';
import BreweryContainer from './components/BreweryContainer/BreweryContainer';
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';

export default class App extends React.Component {
  state = { 
    city: ""
  }

  componentWillMount = () => { 
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => { 
        var uri = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=AIzaSyBCn7UYYYzHCnv_qZ7sHY89gBbKjktRb58&sensor=false%`;
        fetch(uri)
          .then((response) => response.json())
          .then((currentLocation) => { 
            this.setState({ 
              city: currentLocation.results[0].address_components[2].long_name
            });
          });
      }, () => { 
        // the user declines to use location
        this.setState({ city: "Miami" });
      });
    } else { 
      this.setState({ city: "Harrisburg" });
    }
  }

  render() { 
    return (
      <div className="App">
        { this.state.city ? <BreweryContainer city={ this.state.city } /> : <div>Loading</div> }
      </div>
    );
  }
}
