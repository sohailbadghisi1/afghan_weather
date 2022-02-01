import { Icon, Loader, Select } from "semantic-ui-react";
const Form = ({ cities, city, setCity }) => {
  const handleChange = (e) => {
    console.log(e.target.text);
  };
  return (
    <>
      <div className="search">
        <div className="search-top">
          <div>
            <h4>AfghanWeather</h4>
          </div>
          <button>
            <Icon name="marker" size="big" />
            <div>
              <span>Current location</span>
              <b>{city.toUpperCase()},Afghanistan</b>
            </div>
          </button>
        </div>
        <div className="search-main">
          <div>
            <h3>Afghanistan Weather Forecast</h3>
            <div className="line"></div>
            <div className="select-parent">
              <Select
                value={city}
                onChange={(e, d) => setCity(d.value)}
                style={{ fontSize: "1.3rem" }}
                search
                fluid
                type="text"
                placeholder="Type your city"
                options={cities}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Form;
