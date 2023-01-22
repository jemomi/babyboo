interface volume {
    value: number;
    unit: string;
}

interface boilVolume {
    value: number;
    unit: string;
}

interface temp {
    value: number;
    unit: string;
}

interface mashTemp {
    temp: temp;
    duration: number;
}

interface fermentation {
    temp: temp;
}

interface method {
    mash_temp: mashTemp[];
    fermentation: fermentation;
    twist?: any;
}

interface amount {
    value: number;
    unit: string;
}

interface malt {
    name: string;
    amount: amount;
}

interface hop {
    name: string;
    amount: amount;
    add: string;
    attribute: string;
}

interface ingredients {
    malt: malt[];
    hops: hop[];
    yeast: string;
}

interface beer {
    id: number;
    name: string;
    tagline: string;
    first_brewed: string;
    description: string;
    image_url: string;
    abv: number;
    ibu: number;
    target_fg: number;
    target_og: number;
    ebc: number;
    srm: number;
    ph: number;
    attenuation_level: number;
    volume: volume;
    boil_volume: boilVolume;
    method: method;
    ingredients: ingredients;
    food_pairing: string[];
    brewers_tips: string;
    contributed_by: string;
}
