import { countriesAPI } from "../axios/axios";

const SET_COUNTRIES = 'main/SET_COUNTRIES';
const SET_SEARCHED_COUNTRIES = 'main/SET_SEARCHED_COUNTRIES'


const initialState = {
    allCountriesList: [],
    searchedCountriesList: [],
    isFetching: true,
}


const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COUNTRIES:
            return { ...state, allCountriesList: action.payload, isFetching: false };
        case SET_SEARCHED_COUNTRIES:
            return { ...state, searchedCountriesList: action.payload };
        default:
            return state;
    }
};


const setAllCountriesSuccess = (payload) => ({ type: SET_COUNTRIES, payload });
const setSearchedCountriesSuccess = (payload) => ({ type: SET_SEARCHED_COUNTRIES, payload });


export const getAllCountries = () => async (dispatch) => {
    const countriesData = await countriesAPI.getAllCountries();
    dispatch(setAllCountriesSuccess(countriesData.data));
};


export const getSearchedCountries = (words, countries) => (dispatch) => {
    const searchedCountries = countries.filter(country => country.name.common.slice(0, words.length) === words);
    dispatch(setSearchedCountriesSuccess(searchedCountries));
};

export default mainReducer;