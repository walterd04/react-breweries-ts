import React, { Component } from 'react';
import IBrewery from '../../interfaces/IBrewery';
import BreweryCard from '../BreweryCard/BreweryCard';
import BreweryInfo from '../BreweryInfo/BreweryInfo';
import Error from '../Error/Error';
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
    errorMessage?: string,
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
                this.setState({ 
                    hasError: true, 
                    isLoading: false, 
                    errorMessage: "Error in getting breweries. Please check your city and try again."
                });
            });
    }

    changeCity = (event: any) => { 
        this.setState({ 
            city: event.target.value, 
            hasError: false
        });
    }

    setActiveBrewery = (brewery: IBrewery) => { 
        if(brewery.longitude && brewery.latitude){
            this.setState({ 
                activeBrewery: brewery,
                hasError: false, 
                errorMessage: ""
            });
        } else { 
            this.setState({ 
                hasError: true, 
                errorMessage: "No longitude or latitude found, please contact OpenBreweryDB if this is a mistake."
            });
        }
    }

    removeActiveBrewery = () => { 
        this.setState({
            activeBrewery: undefined
        });
    }

    hideError = () => { 
        this.setState({ 
            hasError: false, 
            errorMessage: undefined
        });
    }

    render() {
        const { breweries, activeBrewery } = this.state;

        return (
            <div>
                <div className="container-fluid mb-4">
                    {/* TODO: make this it's own component */}
                    <nav className="navbar navbar-dark bg-dark">
                        <div className="navbar-brand">Andculture Coding Challenge</div>
                        <div className="form-inline">
                            <input type="text" 
                                className="form-control city-search" 
                                placeholder="Enter City to Search" 
                                value={ this.state.city } 
                                onChange={ this.changeCity } />
                            <button className="btn btn-primary ml-1" onClick={ this.handleSearchClick }>Search</button>
                        </div>
                    </nav> 
                </div>
                <div className="container">
                    <Error message={ this.state.errorMessage } show={ this.state.hasError } hideModal={ () => { this.hideError() }} />
                    { activeBrewery && !this.state.hasError ? 
                        <div>
                            <BreweryInfo brewery={ activeBrewery } goBack={ () => { this.removeActiveBrewery() }} />
                        </div> 
                        : 
                        <div>
                            <div className="row">
                                <div className="col">
                                    { breweries.map((brewery) => { 
                                        return ( 
                                            <div className="list-group mb-4" key={ brewery.id }>
                                                <BreweryCard brewery={ brewery } info={ () => { this.setActiveBrewery(brewery) }} />
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    }                   
                </div>
            </div>
        );
    }
}