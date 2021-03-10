import './App.css';
import {SearchBar, SearchCardArea, WeatherCard} from "./Components"
import { useEffect, useState } from 'react';
import {FetchData, FilterCities} from "./helpers"

function App() {
  const [cities, setCities] =useState([])
  const [filteredCities, setFilteredCities] = useState([])
  const [weather, setWeather] = useState("")

  useEffect(()=>{
    let cityList = []
    FetchData("https://countriesnow.space/api/v0.1/countries").then(({data})=>{
    data.map((obj)=> cityList = [...cityList, ...obj.cities])  
    setCities(cityList)
  })
  },[])
  const Filter = (search) =>{
    setFilteredCities(FilterCities(cities, search ==="" ? null : search[0].toUpperCase() + search.slice(1).toLowerCase()))
  }
  const FetchWeather = (city) => {
    FetchData(`http://api.weatherapi.com/v1/current.json?key=19ef5a893eb949d4bbe140550211003&q=${city}`).then((data)=>setWeather(data))
  }
  return (
    <div className="App">
      <SearchBar onSearch ={(search) => Filter(search)}/>
      {filteredCities.length !== 0 && <SearchCardArea filteredCities={filteredCities} mySelectedCity={(city)=> {
        FetchWeather(city)
        setFilteredCities([])
        }} />}
      {weather && <WeatherCard weather={weather}/>}
    </div>
  );
}

export default App;
