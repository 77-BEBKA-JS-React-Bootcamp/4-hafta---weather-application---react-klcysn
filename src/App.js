import './App.css';
import {SearchBar, SearchCardArea} from "./Components"
import { useEffect, useState } from 'react';
import {FetchData, FilterCities} from "./helpers"

function App() {
  const [cities, setCities] =useState([])
  const [filteredCities, setFilteredCities] = useState([])
  const [selectedCity, setSelectedCity] = useState("")

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
  return (
    <div className="App">
      <SearchBar onSearch ={(search) => Filter(search)}/>
      {filteredCities && <SearchCardArea filteredCities={filteredCities} mySelectedCity={(city)=> setSelectedCity(city)} />}
    </div>
  );
}

export default App;
