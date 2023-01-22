import {useQuery} from 'vue-query/esm';
import {fetchRandomBeers} from './beerApiService';
import {generateRandomNumber} from '../../helperFunctions';

export function useBeers(numberOfBeers?: number) {
    
    const count = numberOfBeers === undefined ? generateRandomNumber(0, 20) : numberOfBeers;
    return useQuery([], () => fetchRandomBeers(count))
}