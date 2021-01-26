import {InMemoryDbService} from 'angular-in-memory-web-api';
import { CapitalCity } from './model';

export class CapitalCityData implements InMemoryDbService{
    createDb(){
        const capitalCities: CapitalCity[] = [
            { id: "Zurich", capitalCity: "Zurich", lat: "47.376887", long: "8.541694"},
            { id: "Paris", capitalCity: "Paris", lat: "48.856614", long: "2.352222"},
            { id: "Madrid", capitalCity: "Madrid", lat: "40.416775", long: "-3.70379"},
            { id: "London", capitalCity: "London", lat: "51.507351", long: "-0.127758"},
            { id: "Berlin", capitalCity: "Berlin", lat: "52.520007", long: "13.404954"},
            { id: "Amsterdam", capitalCity: "Amsterdam", lat: "52.367573", long: "4.904139"},
            { id: "Rome", capitalCity: "Rome", lat: "41.902784", long: "12.496366"},
            { id:"Oslo", capitalCity: "Oslo", lat: "59.913869", long: "10.752245"},
            { id:"Vienna", capitalCity: "Vienna", lat: "48.208174", long: "16.373819"},
        ];
        return {capitalCities};
    }
}
