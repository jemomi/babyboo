import {useQuery} from 'vue-query/esm';
import {fetchRandomBeers} from './beerApiService';
import {generateRandomNumber} from '../../helperFunctions';

export function useBeers(numberOfBeers?: number) {
    const count = numberOfBeers === undefined ? generateRandomNumber(1, 20) : numberOfBeers;
    return useQuery(["beers"], () => fetchRandomBeers(count))
}

export function useHistory(numberOfBeers?: number) {
    const count = numberOfBeers === undefined ? generateRandomNumber(1, 20) : numberOfBeers;
    return useQuery(["history"], () => fetchRandomBeers(count))
}

export function useFavorites(numberOfBeers?: number) {
    const count = numberOfBeers === undefined ? generateRandomNumber(1, 5) : numberOfBeers;
    console.log(0, count);
    return useQuery(["favorites"], () => fetchRandomBeers(count))
}