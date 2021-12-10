import "./App.scss";

import styled from "styled-components";
import React from "react";

import Header from "../src/Components/Header/Header";
import Body from "../src/Components/Body/Body";
import InsuranceLogos from "./Components/InsuranceLogos/InsuranceLogos";

const InsuranceLogoDesktop = styled.div`
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

function App() {
  return (
    <React.Fragment className="App">
      <Header />
      <Body />
      <InsuranceLogoDesktop>
        <InsuranceLogos />
      </InsuranceLogoDesktop>
    </React.Fragment>
  );
}

export default App;
