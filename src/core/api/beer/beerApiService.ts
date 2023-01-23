export async function fetchRandomBeers(count: number): Promise<beer[]> {
    if(count < 1 || count > 80) {
        throw new Error("Due to api constraints, count has to be greater than 0 and lower than or equal to 80");
    }
    const res = await fetch("https://api.punkapi.com/v2/beers?per_page=" + count);
    return res.json();
}