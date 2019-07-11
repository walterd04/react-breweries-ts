import React, { SFC } from 'react';
import GoogleMapReact from 'google-map-react';
// import MapMarker from '../MapMarker/MapMarker';
import IBrewery from '../../interfaces/IBrewery';

//TODO: separate these out into their own files

interface IBreweryInfoProps {
    brewery: IBrewery
}

const BreweryInfo: SFC<IBreweryInfoProps> = (props) => {
    let { brewery } = props;

    const latitude = brewery.latitude,
          longitude = brewery.longitude;

    const address = `${ brewery.street } ${ brewery.city }, ${ brewery.state } ${ brewery.postal_code } ${ brewery.country }`;

    let defaultCenter = { lat: parseFloat(latitude), lng: parseFloat(longitude) };

    function renderMarkers(map: any, maps: any): any {
        let marker = new maps.Marker({
            position: defaultCenter, 
            map, 
            title: brewery.name
        });
    }

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{ brewery.name }</h5>
                <p className="card-text">{ address }</p>
            </div>
            <div className="card-img-bottom" style={{ height: '20rem', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: '' }}
                    //google api key goes above
                    defaultCenter={ defaultCenter }
                    defaultZoom={11}
                    onGoogleApiLoaded={ ({map, maps }) => renderMarkers(map, maps)}>                        
                </GoogleMapReact>
            </div>
        </div>
    );
}

export default BreweryInfo