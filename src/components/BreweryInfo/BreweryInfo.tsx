import React, { SFC } from 'react';
import GoogleMapReact from 'google-map-react';
// import MapMarker from '../MapMarker/MapMarker';
import IBrewery from '../../interfaces/IBrewery';
import './BreweryInfo.scss';
import 'font-awesome/css/font-awesome.css';

//TODO: separate these out into their own files

interface IBreweryInfoProps {
    brewery: IBrewery, 
    goBack: any
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
        <div>
            <div className="row">
                <button className="btn btn-secondary btn-back" onClick={ props.goBack }>
                    <i className="fa fa-arrow-left"></i>&nbsp;Go Back
                </button>
            </div>
            <div className="row">
                <h3 className="display-3 text-light">{ brewery.name }</h3>
            </div>
            <div className="row">
                <h6 className="display-6 text-light">{ address }</h6>
            </div>
            <div className="row">
                <div style={{ height: '40em', width: '100%' }}>
                    <GoogleMapReact 
                        bootstrapURLKeys={{ key: 'AIzaSyBCn7UYYYzHCnv_qZ7sHY89gBbKjktRb58' }}
                        //google api key goes above
                        defaultCenter={ defaultCenter }
                        defaultZoom={ 19 }
                        onGoogleApiLoaded={ ({ map, maps }) => renderMarkers(map, maps) }></GoogleMapReact>
                </div>
            </div>
        </div>
    );
}

export default BreweryInfo