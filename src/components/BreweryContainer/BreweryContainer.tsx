import React, { Component } from 'react';
import IBrewery from '../../interfaces/IBrewery';
import BreweryCard from '../BreweryCard/BreweryCard';
import BreweryInfo from '../BreweryInfo/BreweryInfo';
import './BreweryContainer.scss';
import 'bootstrap/dist/css/bootstrap.css';


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
            <div>
                <div className="row">
                    <div className="col-xs-8">
                        <input type="text" 
                                className="form-control" 
                                placeholder="Enter City to Search" 
                                value={ this.state.city } 
                                onChange={ this.changeCity } />                        
                    </div>
                    <div className="col-xs-3">
                        <button className="btn btn-primary btn-block" onClick={ this.handleSearchClick }>Search</button>
                    </div>
                </div>                
                    { breweries.length > 0 ?
                        <div className="row mt-4">
                            { activeBrewery ?
                                <div>
                                    <BreweryInfo brewery={ activeBrewery }  />
                                </div>
                                :
                                <div className="card-columns">
                                    { breweries.map((brewery) => {
                                        return (
                                            <BreweryCard key={ brewery.id } brewery={ brewery } info={ () => this.setActiveBrewery(brewery) } />
                                        )
                                    })}
                                </div>
                            }                            
                        </div> : null
                    }
                </div>
        );
    }
}


{/* <div className="card-columns">
                                activeBrewery ? 
                                    <div></div>
                                    :
                                { breweries.map((brewery, index) => {
                                    return (
                                        activeBrewery && brewery.id === activeBrewery.id ?
                                        <div>{ brewery.name } active</div>
                                        :
                                        <BreweryCard key={ brewery.id } brewery={ brewery } info={ () => this.setActiveBrewery(brewery) }/>
                                    );
                                })}
                            </div> */}