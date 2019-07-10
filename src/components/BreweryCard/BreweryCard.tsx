import React, { Component } from 'react'; 
import './BreweryCard.scss'; 
import 'bootstrap/dist/css/bootstrap.css';
import IBrewery from '../../interfaces/IBrewery';
import genericImage from '../../assets/Beer_generic3.jpg';

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
        let { brewery } = this.state;

        let address = `${ brewery.street } ${ brewery.city }, ${ brewery.state } ${ brewery.postal_code } ${ brewery.country }`;
        return (
            <div className="card">
                <img className="card-img-top" src={ genericImage } alt="Generic Brewery" />
                <div className="card-body">
                <h5 className="card-title">{ brewery.name }</h5>
                    <p className="card-text">Brewery Type: { brewery.brewery_type }</p>
                    <p className="card-text">{ address }</p>
                    <p className="card-text">{ brewery.phone }</p>                        
                    <div className="row">
                        <div className="col-sm">
                            <a className="btn btn-warning btn-block" href={ brewery.website_url } target="_blank" rel="noopener noreferrer">View</a>
                        </div>
                        <div className="col-sm">
                            <button className="btn btn-primary btn-block" onClick={ this.showBreweryInfo }>Info</button>
                        </div>
                    </div>
                </div>
            </div>


            // <div className="col-sm col-xs-12 d-flex align-items-stretch mb-3 mt-4">
            //     <div className="card text-center brewery-card">
            //         <img className="card-img-top" src={ genericImage } alt="Generic Brewery" />
            //         <div className="card-body">
            //             <h5 className="card-title">{ brewery.name }</h5>
            //             <p className="card-text">Brewery Type: { brewery.brewery_type }</p>
            //             <p className="card-text">{ address }</p>
            //             <p className="card-text">{ brewery.phone }</p>                        
            //             <div className="row">
            //                 <div className="col-sm">
            //                     <a className="btn btn-warning btn-block" href={ brewery.website_url } target="_blank" rel="noopener noreferrer">View</a>
            //                 </div>
            //                 <div className="col-sm">
            //                     <button className="btn btn-primary btn-block" onClick={ this.showBreweryInfo }>Info</button>
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
            // </div>
        );
    }
}