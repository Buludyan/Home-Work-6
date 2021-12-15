import axios from "axios";

const instance = axios.create({
    baseURL: 'https://restcountries.com/v3.1/',
});

export const countriesAPI = {
    getAllCountries() {
        return instance.get('/all');
    },
    getCountryInfo(name) {
        return instance.get(`/name/{${name}}`)
    }
}