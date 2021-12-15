import { connect } from "react-redux";
import { getAllCountries, getSearchedCountries } from "../../Redux/mainReducer";
import MainPage from "./mainPage";



const mapStateToProps = (state) => {
    return {
        countries: state.mainPage.allCountriesList,
        searchedCountriesList: state.mainPage.searchedCountriesList,
        isFetching: state.mainPage.isFetching
    }
}

const MainPageContainer = connect(mapStateToProps, {getAllCountries, getSearchedCountries})(MainPage);

export default MainPageContainer;