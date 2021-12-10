import React from "react";

import Subheader from "../Subheader/Subheader";
import Seguros from "../Seguros/Seguros";
import ListaNav from "../ListaNav/ListaNav";
import "./Body.scss";

const Body = () => {
  return (
    <React.Fragment>
      <Subheader />
      <div className="category-container">
        <ListaNav />
        <Seguros />
      </div>
    </React.Fragment>
  );
};

export default Body;
