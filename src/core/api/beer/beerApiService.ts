export async function fetchRandomBeers(count: number): Promise<beer[]> {
    const res = await fetch("https://api.punkapi.com/v2/beers?per_page=" + count);
    return res.json();
}