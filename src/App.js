import React, { useState, useEffect } from "react";
import "./App.css";
import Weather from "./components/weather";
import Form from "./components/Form";
import { Loader, Segment, Dimmer } from "semantic-ui-react";

function App() {
  const cities = [
    { key: "herat", value: "herat", text: "Herat" },
    { key: "kabul", value: "kabul", text: "Kabul" },
    { key: "balkh", value: "balkh", text: "Balkh" },
    { key: "badghis", value: "badghis", text: "Badghis" },
    { key: "helmand", value: "helmand", text: "Helmand" },
    { key: "farah", value: "farah", text: "Farah" },
    { key: "kandahar", value: "kandahar", text: "Kandahar" },
    { key: "kunduz", value: "kunduz", text: "Kunduz" },
    { key: "nangarhar", value: "nangarhar", text: "Nangarhar" },
    { key: "takhar", value: "takhar", text: "Takhar" },
    { key: "baghlan", value: "baghlan", text: "Baghlan" },
    { key: "parwan", value: "parwan", text: "Parwan" },
    { key: "jowzjan", value: "jowzjan", text: "Jowzjan" },
    { key: "ghazni", value: "ghazni", text: "Ghazni" },
    { key: "sar-e Pol", value: "sar-e Pol", text: "Sar-e Pol" },
    { key: "ghor", value: "ghor", text: "Ghor" },
    { key: "laghman", value: "laghman", text: "Laghman" },
    { key: "logar", value: "logar", text: "Logar" },
    { key: "badakhshan", value: "badakhshan", text: "Badakhshan" },
    { key: "bamyan", value: "bamyan", text: "Bamyan" },
    { key: "daykundi", value: "daykundi", text: "Daykundi" },
    { key: "faryab", value: "faryab", text: "Faryab" },
    { key: "kapisa", value: "kapisa", text: "Kapisa" },
    { key: "khost", value: "khost", text: "Khost" },
    { key: "kunar", value: "kunar", text: "Kunar" },
    { key: "nimruz", value: "nimruz", text: "Nimruz" },
    { key: "nuristan", value: "nuristan", text: "Nuristan" },
    { key: "paktia", value: "paktia", text: "Paktia" },
    { key: "paktika", value: "paktika", text: "Paktika" },
    { key: "panjshir", value: "panjshir", text: "Panjshir" },
    { key: "samangan", value: "samangan", text: "Samangan" },
    { key: "uruzgan", value: "uruzgan", text: "Uruzgan" },
    { key: "maidan wardak", value: "maidan wardak", text: "Maidan Wardak" },
    { key: "zabul", value: "zabul", text: "Zabul" },
  ];

  const [city, setCity] = useState("herat");
  const [weatherData, setWeatherData] = useState({});
  const [sevenDaysData, setSevenDaysData] = useState({});
  const [latLong, setLatLong] = useState({});

  useEffect(() => {
    fetchData();
    fetch16DaysForecast();
  }, [city]);

  const fetch16DaysForecast = async (lon, lat) => {
    try {
      const resp = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly&units=metric&appid=54d6eb948dd4976ce0983f6819428d56`
      );
      const json = await resp.json();
      setSevenDaysData(json);
    } catch (e) {
      console.log(e);
    }
  };

  console.log("City:", city);
  const fetchData = async () => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=54d6eb948dd4976ce0983f6819428d56`
      );
      const json = await res.json();
      console.log("json", json.coord);
      setWeatherData(json);
      fetch16DaysForecast(json.coord.lon, json.coord.lat);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="App">
      <section className="main">
        <Form cities={cities} city={city} setCity={setCity} />
        <Weather data={weatherData} weeklyData={sevenDaysData} />
      </section>
    </div>
  );
}

export default App;
