import React, { Component } from 'react';
import IBrewery from '../../interfaces/IBrewery';
import BreweryCard from '../BreweryCard/BreweryCard';
import BreweryInfo from '../BreweryInfo/BreweryInfo';
import 'bootstrap/dist/css/bootstrap.css';
import './BreweryContainer.scss';


// TODO: implement interfaces in seperate files
interface IBreweryContainerProps {
    city: string
}

interface IBreweryContainerState {
    city: string,
    breweries: Array<IBrewery>, 
    hasError: boolean, 
    isLoading: boolean, 
    activeBrewery?: IBrewery
}

export default class BreweryContainer extends Component<IBreweryContainerProps, IBreweryContainerState> {
    constructor(props: IBreweryContainerProps) {
        super(props);

        this.state = { 
            city: this.props.city, 
            breweries: [], 
            hasError: false, 
            isLoading: false
        };
    }

    componentDidMount = () => { 
        this.searchForBreweries();
    }

    handleSearchClick = () => { 
        this.setState({ breweries: [], isLoading: true });
        this.searchForBreweries();
    }

    searchForBreweries = () => { 
        // TODO: find a better way of doing this
        const uri = `https://api.openbrewerydb.org/breweries?by_city=${this.state.city}`;

        fetch(uri)   
            .then(response => response.json())
            .then(breweries => {
                this.setState({ 
                    breweries, 
                    isLoading: false
                });
            })
            .catch(error => {
                this.setState({ hasError: true, isLoading: false });
            });
    }

    changeCity = (event: any) => { 
        this.setState({ city: event.target.value });
    }

    setActiveBrewery = (brewery: IBrewery) => { 
        this.setState({ activeBrewery: brewery });
    }

    render() {
        const { breweries, activeBrewery } = this.state;

        return (
            <div className="mail-box">
                <aside className="sm-side">
                    <div className="user-head">
                        <div className="user-name">
                            <h4>Andculture Coding Challenge</h4>
                            <h6>OpenBreweryDB React Frontend</h6>
                            <small className="text-muted">
                                View source code on&nbsp;
                                <a href="https://github.com/walterd04/react-breweries-ts" target="_blank" rel="noopener noreferrer">GitHub.</a>
                            </small>
                        </div>
                    </div>
                    <div className="search-wrapper">
                        <input type="text" 
                            className="form-control city-search" 
                            placeholder="Enter City to Search" 
                            value={ this.state.city } 
                            onChange={ this.changeCity } />
                        <button className="btn btn-primary btn-block" onClick={ this.handleSearchClick }>Search</button>
                    </div>
                    <ul className="brewery-nav">
                        { breweries.map((brewery) => { 
                            return (
                                activeBrewery && activeBrewery.id === brewery.id ?
                                <BreweryCard key={ brewery.id } brewery={ brewery } info={ () => { this.setActiveBrewery(brewery) }} active={ true } />
                                :
                                <BreweryCard key={ brewery.id } brewery={ brewery } info={ () => { this.setActiveBrewery(brewery) }} active={ false } />
                            )
                        })}
                    </ul>
                </aside>
                <div className="lg-side">
                    { activeBrewery ? 
                        <div>
                            <BreweryInfo brewery={ activeBrewery } key={ activeBrewery.id } />
                        </div>
                        : null 
                    }
                </div>
            </div>
        );
    }
}