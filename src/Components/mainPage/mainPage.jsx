import { useEffect, useState } from "react";
import Preloader from "../../Preloader/Preloader";
import Country from "./country/country";
import classes from './mainPage.module.css'



const MainPage = ({
    getAllCountries, 
    countries, 
    getSearchedCountries, 
    searchedCountriesList,
    isFetching
    }) => {

    useEffect(() => getAllCountries(), []);
    
    const [inputValue, setInputValue] = useState('');

    const onChangeHandler = (event) => {
        setInputValue(event.target.value);
        getSearchedCountries(event.target.value, countries)
    }

    return (
        <div className={classes.mainPage}>
            <h1>Countries list</h1>
            <div className={classes.input}>
                <input 
                    type='text' 
                    placeholder="Search" 
                    onChange={onChangeHandler} 
                    value={inputValue}>
                </input>
            </div>
            <div className={classes.countriesList}>
                {isFetching && <Preloader />}
                {inputValue.length === 0 ?
                countries.map(country =>
                    <Country 
                        name={country.name.common}
                        flag={country.flags.png} 
                    />
                ) 
                : 
                searchedCountriesList.map(country =>
                    <Country 
                        name={country.name.common}
                        flag={country.flags.png}  
                    />
                )}
            </div>
        </div>
    )
}


export default MainPage;