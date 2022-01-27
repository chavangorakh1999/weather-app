import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Temprature from "./components/Temprature";
import Details from "./components/Details";
import axios from "axios";
import background from "./Assets/Images/background.svg";

function App() {
  const [temp, setTemp] = useState(0);
  const [location, setLocation] = useState("");
  const [image, setImage] = useState("");
  const [text, setText] = useState("");
  const [humidity, setHumidity] = useState("");
  const [windspeed, setWindSpeed] = useState("");
  const [pressure, setPressure] = useState("");
  const [updated, setUpdated] = useState("");

  useEffect(() => {
    axios
      .get(
        "http://api.weatherapi.com/v1/forecast.json?key= c35855c5c3e241cfbc152706201910&q=pune&days=7"
      )
      .then((response) => {
        const data = response.data;
        setTemp(data.current.temp_c);
        setImage(data.current.condition.icon);
        setText(data.current.condition.text);
        setLocation(data.location.name);
        setHumidity(data.current.humidity);
        setWindSpeed(data.current.wind_mph);
        setPressure(data.current.pressure_in);
        setUpdated(data.current.last_updated);
      });
  }, []);
  return (
    <Wrapper>
      <Temprature temprature={temp} text={text} image={image} />
      <LocationDiv>
        <h2>{location}</h2>
      </LocationDiv>
      <Details
        humidity={humidity}
        windspeed={windspeed}
        pressure={pressure}
        updated={updated}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-family: "Roboto", sans-serif;
  margin: 0;
  padding: 5% 3%;
  background: rgb(138, 44, 12);
  background: linear-gradient(
    0deg,
    rgba(138, 44, 12, 1) 0%,
    rgba(221, 70, 19, 1) 78%,
    rgba(255, 255, 255, 1) 100%
  );
  height: 100vh;
`;
const LocationDiv = styled.div`
  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(11.9px);
  -webkit-backdrop-filter: blur(11.9px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: #fff;
  text-align: center;
  font-size: 3rem;
  h2 {
    font-size: 3rem;
  }
`;

export default App;
