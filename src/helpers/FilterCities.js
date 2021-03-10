

export const FilterCities = (cities, search) =>{
    const filteredCities = cities.filter((city)=>city.includes(search))
    return filteredCities
}