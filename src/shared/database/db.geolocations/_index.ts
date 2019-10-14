export interface IGeocodeCity {
    name: string;
    country_code: string;
}
export interface IGeocodeCountry {
    name: string;
    country_code: string;
}

export default class DBGeolocationsService {

    private dbConnector: any;
    private dbName: string;

    constructor() {
        this.dbConnector = (window as any).indDB;
        this.dbName = 'DB Geolocation Service';
    }


    public getName(): string {
        return this.dbName;
    }

    public getCountries(): Promise<string[]> {
        return new Promise((resolve, reject) => {

            const URL_GEO_COUNTRIES: string = 'https://firebasestorage.googleapis.com/v0/b/app-tokpets-dev.appspot.com/o/Geocode%2Fcountries.geocode.json?alt=media&token=3dd36833-5de1-414c-8e63-c8f9f2a99644';

            fetch(URL_GEO_COUNTRIES)
            .then((countries: any) => countries.json())
            .then((countries: any) => {
                const countries_json: any = countries;
                const countries_array: string[] = countries_json.map((cjson: any) => cjson);
                const countries_mapped: string[] = countries_array;
                resolve(countries_mapped);
            });
        });
    }
    public getCities(country: any): Promise<string[]> {
        return new Promise((resolve, reject) => {

            const URL_GEO_CITIES: string = 'https://firebasestorage.googleapis.com/v0/b/app-tokpets-dev.appspot.com/o/Geocode%2Fcities.geocode.json?alt=media&token=4fcfff29-09aa-49ab-bdb6-627fe99932e4';
            const COUNTRY_CODE: string = country.code;
            const COUNTRY_NAME: string = country.country;

            fetch(URL_GEO_CITIES)
            .then((cities: any) => cities.json())
            .then((cities: any) => {
                const cities_json: any = cities;
                const cities_array: string[] = cities_json.map((cjson: any) => cjson.country);
                const cities_mapped: string[] = cities_array.filter((city: any) => city);
                resolve(cities_mapped);
            });
            
        });
    }

    public setCountries(countries: IGeocodeCountry[]): any {
        console.log(countries);
    }
    public setCities(cities: IGeocodeCity[]): any {
        console.log(cities);
    }





}
