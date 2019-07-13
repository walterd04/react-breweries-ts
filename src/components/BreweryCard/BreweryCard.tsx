import React, { Component } from 'react'; 
import IBrewery from '../../interfaces/IBrewery';
import BreweryInfo from '../BreweryInfo/BreweryInfo';
import './BreweryCard.scss'; 
import 'bootstrap/dist/css/bootstrap.css';

//TODO: seperate these into their own files
interface IBreweryCardProps { 
    brewery: IBrewery, 
    info: any, 
    active: boolean
}

const BreweryCard: React.SFC<IBreweryCardProps> = (props) => {
    let { brewery, info } = props;
    let address = `${ brewery.street } ${ brewery.city }, ${ brewery.state } ${ brewery.postal_code } ${ brewery.country }`;
    let cardClass = props.active ? "list-group-item bg-dark text-white w-100" : "list-group-item bg-transparent w-100";

    return (
        <button className="list-group-item list-group-item-action flex-column align-items-start " onClick={ info }>
            <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{ brewery.name }</h5>
                <small>{ brewery.brewery_type }</small>
            </div>
            <div>
                <p className="mb-1">{ address }</p>
            </div>
            <div>
                <p className="mb-1">{ brewery.phone }</p>
            </div>
            <div>
                <small>
                    { brewery.website_url ? 
                        <a className="btn-link" href={ brewery.website_url } target="_blank" rel="noopener noreferrer">
                            { brewery.website_url }
                        </a>
                        : 
                        <span>&nbsp;</span>
                    }
                </small>
            </div>
        </button>
    );
}

export default BreweryCard;