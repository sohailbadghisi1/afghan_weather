import React, { useState } from "react";
import ContentLoader from "react-content-loader";
import { Icon } from "semantic-ui-react";
import Carousel from "./Carousel";
import moment from "moment";
let image = "../img/bg.jpg";
const Weather = ({ data, weeklyData }) => {
  const [loader, setLoader] = useState(true);

  return (
    <>
      <div className="data">
        <div className="data1">
          <h2>Today</h2>
          {typeof data.main === "undefined" ? (
            <ContentLoader viewBox="0 0 450 260">
              <rect x="0" y="0" rx="2" ry="2" width="500" height="300" />
            </ContentLoader>
          ) : (
            <div className="box">
              <div>
                <h1>{data.main.temp}&#176; </h1>
                <section>
                  <span>{data.weather[0].main}</span>
                  <img
                    src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
                  />
                </section>
                <p>{moment().format("dddd Do MMMM YYYY")}</p>
              </div>

              <div>
                <span>
                  Sunrise:{" "}
                  {"0" +
                    new Date(data.sys.sunrise * 1000).getHours() +
                    ":" +
                    new Date(data.sys.sunrise * 1000).getMinutes()}
                </span>
                <span>
                  Sunset:{" "}
                  {new Date(data.sys.sunset * 1000).getHours() +
                    ":" +
                    new Date(data.sys.sunset * 1000).getMinutes()}
                </span>
                <span>Max Temp: {data.main.temp_min}&#176; </span>
                <span>Min Temp: {data.main.temp_max}&#176; </span>
                <span>Wind Speed: {data.wind.speed}</span>
              </div>
            </div>
          )}
        </div>
        <div className="data2">
          <h3>Daily</h3>
          <div>
            <Carousel data={data} weeklyData={weeklyData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Weather;
