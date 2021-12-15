import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from 'redux-thunk';
import countryReducer from "./countryReducer";
import mainReducer from "./mainReducer";


const reducers = combineReducers({
    mainPage: mainReducer,
    country: countryReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;