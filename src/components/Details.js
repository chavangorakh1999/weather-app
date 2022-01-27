import React from "react";
import styled from "styled-components";

function Details({ humidity, windspeed, pressure, updated }) {
  return (
    <Features>
      <h3>Weather Info</h3>
      <Wrapper>
        <DetailRow1>
          <h4>{humidity}</h4>
          <span>Humidity</span>
        </DetailRow1>
        <DetailRow1>
          <h4>{windspeed}</h4>
          <span>Wind Speed</span>
        </DetailRow1>
        <DetailRow2>
          <h4>{pressure}</h4>
          <span>Pressure</span>
        </DetailRow2>
        <DetailRow2>
          <h4>{updated}</h4>
          <span>Last Updated On</span>
        </DetailRow2>
      </Wrapper>
    </Features>
  );
}

const Features = styled.section`
  color: white;
  margin-top: 8vh;
  padding: 10px;
  text-align: center;
  h3 {
    font-size: 2rem;
  }
`;

const Wrapper = styled.div`
  margin-top: 5vh;
  display: grid;
  grid-gap: 50px 50px;
`;

const DetailRow1 = styled.div`
  grid-row-start: 1;
  grid-row-end: 1;
`;
const DetailRow2 = styled.div`
  grid-row-start: 2;
  grid-row-end: 2;
`;

export default Details;
