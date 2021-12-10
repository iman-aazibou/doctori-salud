import React from "react";


import Card from "./../UI/Card/Card";
import Form from "../Form/Form";
import "./Seguros.scss";


const Seguros = () => {
  return (
      <Card className="seguros-container">
        <div className="seguros-header-container">
          <h2>Tu seguro de salud al mejor precio.</h2>
          <p> ¡Hasta 50 % de descuento!</p>
        </div>
        <div className="form-container">
          <Form />
        </div>
      </Card>
  );
};

export default Seguros;
