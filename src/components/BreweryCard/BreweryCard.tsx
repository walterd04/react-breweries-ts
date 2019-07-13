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
        <button className={ cardClass } onClick={ info }>
            <div>
                <h6>{ brewery.name }</h6>
                <p>{ brewery.brewery_type }</p>
                <p>{ address }</p>
                <small className="text-muted">
                    <a href={ brewery.website_url } target="_blank" rel="noopener noreferrer">
                        { brewery.website_url }
                    </a>
                </small>
            </div> 
        </button>
    );
}

export default BreweryCard;