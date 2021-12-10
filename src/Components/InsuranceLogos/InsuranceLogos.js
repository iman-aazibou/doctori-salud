import React from "react";


import "./InsuranceLogos.scss";

import Allianz from "../Images/insurance-logos/allianz.png";
import MutuaMadrilena from "../Images/insurance-logos/mutua-madrilena.jpg";
import Axa from "../Images/insurance-logos/axa.jpg";
import RealeSeguros from "../Images/insurance-logos/reale-seguros.png";
import Zurich from "../Images/insurance-logos/zurich.jpg";
import Pelayo from "../Images/insurance-logos/pelayo.jpg";
import Fiatc from "../Images/insurance-logos/fiatc.jpg";
import Verti from "../Images/insurance-logos/verti.png";

// const InsuranceLogos = () => {
//   const insuranceLogos = [
//     { name: Allianz },
//     { name: MutuaMadrilena },
//     { name: Axa },
//     { name: RealeSeguros },
//     { name: Zurich },
//     { name: Pelayo },
//     { name: Fiatc },
//     { name: Verti },
//   ];



const InsuranceLogos = () => {
  return (
    <div className="insurance-logos-container">
      <img src={Allianz} alt="insurance-logo"></img>
      <img src={MutuaMadrilena} alt="insurance-logo"></img>
      <img id="axa-logo-size" src={Axa} alt="insurance-logo"></img>
      <img src={RealeSeguros} alt="insurance-logo"></img>
      <img src={Zurich} alt="insurance-logo"></img>
      <img src={Pelayo} alt="insurance-logo"></img>
      <img src={Fiatc} alt="insurance-logo"></img>
      <img src={Verti} alt="insurance-logo"></img>
      {/* {insuranceLogos.map((insurancelogo) => {
        return (
          <img
            className="col"
            src={insurancelogo.name}
            alt="insurance logo"
          ></img>
        );
      })} */}
    </div>
  );
};

export default InsuranceLogos;
