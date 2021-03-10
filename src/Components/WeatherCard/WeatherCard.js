import "./WeatherCard.scss"

export const WeatherCard = ({weather}) =>{
    const d = new Date()
    const months =["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    return (
      <article className="widget">
        <div className="weatherIcon">
            <img className="weatherImage" src={weather?.current?.condition?.icon} alt="" />
        </div>
        <div className="weatherData">
          <h1 className="temperature">{weather?.current?.temp_c}&deg;</h1>
          <h2 className="description">{weather?.current?.condition?.text}</h2>
          <h3 className="city">{weather?.location?.country}, {weather?.location?.name}</h3>
        </div>
        <div className="date">
          <h4 className="month" id="month">
            {months[d.getMonth()]}
          </h4>
          {/* <h5 className="day" id="day">
            {d.getDay()}
          </h5> */}
        </div>
      </article>
    );
}