import Slider from "react-slick";
import ContentLoader from "react-content-loader";
import moment from "moment";
const Carousel = ({ data, weeklyData }) => {
  console.log(weeklyData);
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    centerMode: true,
    slidesToScroll: 1,
    variableWidth: true,
  };

  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <div className="slider-parent">
      {typeof weeklyData.current === "undefined" ? (
        <Slider {...settings} className="slider">
          <div className="slider-box">
            <h4>------</h4>
            <h2>-------</h2>
            <h5>---------</h5>
          </div>
          <div className="slider-box">
            <h4>------</h4>
            <h2>-------</h2>
            <h5>---------</h5>
          </div>
        </Slider>
      ) : (
        <Slider {...settings} className="slider">
          {weeklyData.daily.map((day, index) => (
            <div className="slider-box" key={index}>
              <h4>{days[new Date(day.dt * 1000).getDay()]}</h4>
              <h2>{day.temp.eve}&#176;</h2>
              <img
                src={`http://openweathermap.org/img/w/${day.weather[0].icon}.png`}
              />
              <h5>
                {new Date(day.dt * 1000).getDay()}{" "}
                {months[new Date(day.dt * 1000).getMonth()]}
              </h5>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};
export default Carousel;
