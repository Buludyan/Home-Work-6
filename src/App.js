import { Route, Routes } from 'react-router-dom';
import './App.css';
import CountryPageContainer from './Components/countryPage/countryPageContainer';
import MainPageContainer from './Components/mainPage/mainPageContainer';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='' element={<MainPageContainer />}/>
        <Route path='/country/:name' element={<CountryPageContainer />}/>
      </Routes>
    </div>
  );
}

export default App;
