import { NavLink } from "react-router-dom";
import classes from './country.module.css'

const Country = ({name, flag }) => {

    return (
        <div className={classes.country}>
            <div className={classes.countryBody}>
                <NavLink to={`country/${name}`} className={classes.countryName}>{name}</NavLink>
                <img src={flag} className={classes.flag}></img>
            </div>
        </div>
    )
}

export default Country;