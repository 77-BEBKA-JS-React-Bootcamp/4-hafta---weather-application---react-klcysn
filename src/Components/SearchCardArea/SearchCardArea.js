import "./SearchCardArea.scss"

export const SearchCardArea = ({filteredCities, mySelectedCity}) =>{
    return(
        <div className="card-area-container" >
            {filteredCities.map((city, index)=>{
                return(
                    <div key={index} className="city-card" onClick={()=>mySelectedCity(city)}>
                        {city}
                    </div>
                )
            })}
        </div>
    )
}