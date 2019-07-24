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

    public getCountries(): string[] {
        return [];
    }





}