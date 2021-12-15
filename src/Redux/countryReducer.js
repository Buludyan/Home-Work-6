import { countriesAPI } from "../axios/axios";

const SET_IS_FETCHING = 'country/SET_IS_FETCHING';
const SET_COUNTRY_INFO = 'country/GET_COUNTRY_INFO';

const initialState = {
    countryInfo: [],
    isFetching: true
}


const countryReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IS_FETCHING:
            return { ...state, isFetching: true };
        case SET_COUNTRY_INFO:
            return { ...state, countryInfo: action.payload, isFetching: false };
        default:
            return state;
    }
};

const setIsFetching = () => ({type: SET_IS_FETCHING});
const setCountryInfoSuccess = (payload) => ({type: SET_COUNTRY_INFO, payload});

export const getCountryInfo = (countryName) => async (dispatch) => {
    dispatch(setIsFetching());
    const countryData = await countriesAPI.getCountryInfo(countryName);
    const officialName = countryData.data[0].name.official;
    const flagUrl = countryData.data[0].flags.png;
    const area = countryData.data[0].area
    const population = countryData.data[0].population
    dispatch(setCountryInfoSuccess([officialName, flagUrl, area, population]));
}


export default countryReducer;