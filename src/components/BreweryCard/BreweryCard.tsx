import React from 'react'; 
import IBrewery from '../../interfaces/IBrewery';
import './BreweryCard.scss'; 
import 'bootstrap/dist/css/bootstrap.css';

//TODO: seperate these into their own files
interface IBreweryCardProps { 
    brewery: IBrewery, 
    info: any
}

function formatPhoneNumber(phone: string): string {
    return phone ? `(${phone.substring(0, 3)}) ${phone.substring(3, 6)}-${phone.substring(6)}` : "";
}

const BreweryCard: React.SFC<IBreweryCardProps> = (props) => {
    let { brewery, info } = props;
    let address = `${ brewery.street } ${ brewery.city }, ${ brewery.state } ${ brewery.postal_code } ${ brewery.country }`;    

    return (
        <button className="list-group-item list-group-item-action list-group-item-secondary flex-column align-items-start " onClick={ info }>
            <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{ brewery.name }</h5>
                <small>{ brewery.brewery_type }</small>
            </div>
            <div className="d-flex w-100 justify-content-between">
                <p className="mb-1">{ address }</p>
            </div>
            <div className="d-flex w-100 justify-content-between">
                <p className="mb-1">{ formatPhoneNumber(brewery.phone) }</p>
            </div>
            <div className="d-flex w-100 justify-content-between">
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