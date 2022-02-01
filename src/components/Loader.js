import React from "react";
import ContentLoader from "react-content-loader";

const WeatherLoader = (props) => {
  return (
    <ContentLoader
      height={40}
      width={1060}
      speed={2}
      primaryColor="#d9d9d9"
      secondaryColor="#ecebeb"
      {...props}
    >
      // your loader
    </ContentLoader>
  );
};

export default WeatherLoader;
