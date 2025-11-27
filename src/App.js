import { useState, useEffect } from "react";
import "./App.css";
import WeatherCard from "./WeatherCard";

const API_KEY = "3f45219626de793aac1150c172202239";

function App() {
  const [city, setCity] = useState("Toronto");
  const [search, setSearch] = useState("Toronto");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const fetchWeather = async (cityName) => {
    setError("");
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
      );
      if (!res.ok) {
        setWeather(null);
        setError("City not found");
        return;
      }
      const data = await res.json();
      setWeather(data);
    } catch {
      setWeather(null);
      setError("Error loading data");
    }
  };

  useEffect(() => {
    fetchWeather(city);
  }, [city]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search.trim()) return;
    setCity(search.trim());
  };

  return (
    <div className="app">
      <h1 className="title">Weather App</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Enter city"
        />
        <button className="button" type="submit">
          Search
        </button>
      </form>
      {error && <p className="error">{error}</p>}
      {weather && <WeatherCard weather={weather} />}
    </div>
  );
}

export default App;

