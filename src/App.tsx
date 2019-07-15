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

// const App: React.FunctionComponent = () => {
//   const city = getCurrentCity();

//   function getCurrentCity() : string {
//     var city;

//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition((position) => { 
//         var uri = "https://maps.googleapis.com/maps/api/geocode/json?latlng=39.908147199999995,-77.7109504&key=AIzaSyBCn7UYYYzHCnv_qZ7sHY89gBbKjktRb58&sensor=false%";

//         city = fetch(uri)
//           .then((response) => { 
//             return response.json();
//           })
//           .then((currentLocation) => { 
//             city = setCity(currentLocation.results[0].address_components[2].long_name);
//           });
//       });
//     }

//     return city || "Harrisburg";
//   }

//   function setCity(city: string) : string {
//     return city;
//   }

//   return (
//       <div className="App">
//         <BreweryContainer city={ city } />
//       </div>
//   );
// }

// export default App;
