import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import MapMarker from '../MapMarker/MapMarker';
import IBrewery from '../../interfaces/IBrewery';

//TODO: separate these out into their own files
interface IBreweryInfoState {
    brewery: IBrewery, 
    apiKey: string, 
    address: string
}

interface IBreweryInfoProps {
    brewery: IBrewery
    address: string
}

export default class BreweryInfo extends Component<IBreweryInfoProps, IBreweryInfoState> {
    constructor(props: IBreweryInfoProps) {
        super(props); 
        this.state = { 
            brewery: this.props.brewery, 
            apiKey: '', // insert api key here 
            address: this.props.address
        };
    }

    render() {
        const { brewery, apiKey, address } = this.state;

        const latitude = brewery.latitude, 
              longitude = brewery.longitude;

        let defaultCenter = { lat: parseFloat(latitude), lng: parseFloat(longitude) };

        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{ brewery.name }</h5>
                    <p className="card-text">{ address }</p>
                </div>
                <div className="card-img-bottom" style={{ height: '20rem', width: '100%' }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: apiKey }}
                        defaultCenter={ defaultCenter }
                        defaultZoom={11}>
                            <MapMarker 
                                lat={ latitude }
                                lng={ longitude }
                                name={ brewery.name }
                                color="red" />
                        </GoogleMapReact>
                </div>      
            </div>          
        );
    }
}