import IBrewery from './IBrewery';

export default interface IBreweryContainerProps {
    city: string
}

export default interface IBreweryContainerState {
    city: string,
    breweries: Array<IBrewery>, 
    hasError: boolean, 
    isLoading: boolean
}