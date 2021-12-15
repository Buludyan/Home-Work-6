import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Preloader from "../../Preloader/Preloader";
import { useParams } from "react-router-dom";
import classes from './countryPage.module.css'

const CountryPage = ({ isFetching, countryInfo, getCountryInfo }) => {

    const params = useParams();
    
    useEffect(() => getCountryInfo(params.name), []);
    
    return (
        <div>
            <NavLink to='/'><button className={classes.button}>Back</button></NavLink>
            <div>
                {isFetching 
                ?
                <Preloader />
                :
                <div className={classes.country}>   
                    <h1>{countryInfo[0]}</h1>
                    <img src={countryInfo[1]} className={classes.flag}></img>
                    <h2>Size: {countryInfo[2]} km^2</h2>
                    <h2>Population: {countryInfo[3]} people</h2>
                </div>
                }
            </div>
        </div>
    )
}


export default CountryPage;