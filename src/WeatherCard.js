function WeatherCard({ weather }) {
  const temperature = Math.round(weather.main.temp);
  const description = weather.weather[0].description;
  const city = weather.name;
  const country = weather.sys.country;
  const icon = weather.weather[0].icon;
  const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <div className="card">
      <div className="card-location">
        {city}, {country}
      </div>
      <img className="card-icon" src={iconUrl} alt={description} />
      <div className="card-temp">
        {temperature}°C
      </div>
      <div className="card-desc">
        {description}
      </div>
    </div>
  );
}

export default WeatherCard;
