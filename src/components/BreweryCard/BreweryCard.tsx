import React, { Component } from 'react'; 
import IBrewery from '../../interfaces/IBrewery';
import genericImage from '../../assets/Beer_generic3.jpg';
import BreweryInfo from '../BreweryInfo/BreweryInfo';
import './BreweryCard.scss'; 
import 'bootstrap/dist/css/bootstrap.css';

//TODO: seperate these into their own files
interface IBreweryCardProps { 
    brewery: IBrewery
}

interface IBreweryCardState {
    brewery: IBrewery, 
    showBreweryInfo: boolean
}

export default class BreweryCard extends Component<IBreweryCardProps, IBreweryCardState> {
    constructor(props: IBreweryCardProps) {
        super(props);
        this.state = {
            brewery: this.props.brewery, 
            showBreweryInfo: false
        };
    }

    showBreweryInfo = () => { 
        this.setState({ showBreweryInfo: true });
    }

    hideBreweryInfo = () => { 
        this.setState({ showBreweryInfo: false });
    }

    render() { 
        let { brewery, showBreweryInfo } = this.state;

        let address = `${ brewery.street } ${ brewery.city }, ${ brewery.state } ${ brewery.postal_code } ${ brewery.country }`;
        return (
            showBreweryInfo ? 
                <BreweryInfo brewery={ brewery }
                             address={ address } /> 
                :
                <div className="card">
                    <img className="card-img-top" src={ genericImage } alt="Generic Brewery" />
                    <div className="card-body">
                        <h5 className="card-title">{ brewery.name }</h5>
                        { brewery.website_url ? 
                            <a className="btn btn-link card-text" 
                                href={ brewery.website_url } 
                                target="_blank"
                                rel="noopener noreferrer">
                                    { brewery.website_url }
                            </a> : <span>&nbsp;</span>
                        }
                        <p className="card-text">Brewery Type: { brewery.brewery_type }</p>
                        <p className="card-text">{ address }</p>
                        <p className="card-text">{ brewery.phone }</p>                        
                        <button className="btn btn-primary btn-block" onClick={ this.showBreweryInfo }>View More Info</button>                    
                    </div>
                </div>
        );
    }
}