import React from "react";
import Muneco from "../Images/muneco-doctori/pose-1-b.png";

import styled from "styled-components";
import InsuranceLogos from "../InsuranceLogos/InsuranceLogos";

import "./Subheader.scss";

const ResponsiveLogosDiv = styled.div`
  display: none;

  @media only screen and (max-width: 600px) {
    display: block;
    
  }
`;

const Subheader = () => {
  return (
    <React.Fragment>
      <div className="subheader">
        <div className="header-container">
          <h1> El Comprador Nº1 en seguros</h1>
        </div>

        <div className="doctori-container">
          <img src={Muneco} alt="muneco doctori"></img>
        </div>
      </div>
      <ResponsiveLogosDiv>
        <InsuranceLogos />
      </ResponsiveLogosDiv>
      <div className="category-tags">
        <div>
          <p>Seguros</p>
        </div>
        <div>
          <p>Móvil e Internet</p>
        </div>
        <div>
          <p>Luz y Gas</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Subheader;
