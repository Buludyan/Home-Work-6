import { connect } from "react-redux";
import { getCountryInfo } from "../../Redux/countryReducer";
import CountryPage from "./countryPage";

const mapStateToProps = (state) => {
    return {
        isFetching: state.country.isFetching,
        countryInfo: state.country.countryInfo
    }
}

const CountryPageContainer = connect(mapStateToProps, {getCountryInfo})(CountryPage);

export default CountryPageContainer;