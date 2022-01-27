import React from "react";
import styled from "styled-components";

function Temprature({ temprature, text, image }) {
  return (
    <Wrapper>
      <TempratureInDegrees>
        <h2>{temprature}&deg;C</h2>
        <h5>{text}</h5>
      </TempratureInDegrees>
      <HumadityIcon>
        <img src={image} alt="Atmosphere" />
      </HumadityIcon>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  color: white;
  margin: auto;
  padding: 2%;
  width: 50vw;
  height: 50vh;
  margin-bottom: 5vh;
  @media only screen and (max-width: 726px) {
    width: 95vw;
    height: 15vh;
  }
`;
const TempratureInDegrees = styled.div`
  height: 100%;
  float: left;
  line-height: 1.25em;
  vertical-align: middle;
  display: flex;
  justify-content: center;
  align-items: center;
  h2 {
    font-size: 3rem;
  }
  h5 {
    margin-left: 5vw;
    font-size: 1.5rem;
  }
  h2,
  h5 {
    display: inline-block;
  }
  @media only screen and (max-width: 500px) {
    h2 {
    font-size: 2.2rem;
  }
  h5 {
    margin-left: 2vw;
    font-size: 1rem;
  }
  }
`;
const HumadityIcon = styled.div`
  padding: auto;
  height: 100%;
  float: right;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

`;
export default Temprature;
