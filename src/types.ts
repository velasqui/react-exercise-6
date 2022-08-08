export interface Quote {
    text: string;
    author: string;
};

export interface Forecast {
    properties: {
        periods: Periods[];
    };
}

export interface Periods {
    name: string;
    temperature: number;
    icon: string;
    detailedForecast: string;
}