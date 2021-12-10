import React, { useState } from "react";

import "./ListaNav.scss";

import styled from "styled-components";

const ResponsiveLabel = styled.div`
  display: none;

  @media only screen and (max-width: 600px) {
    display: block;
    height: 2vh;
    position: relative;
    left: -40px;
    top: -10px;
  }
`;

const ListaNav = () => {


  const SelectedCategory = (props) => {
    const [background, setBackground] = useState("none");
    const [font, setFontColor] = useState("black");
    //to unselect when another tab is selected
    // const [selected, setSelected] = useState('');

    const selectedCategory = (background, font) => {
      setBackground("navy");
      setFontColor("white");
    
    };

    const Styles =   styled.label`
    background-color: ${background};
    border-radius: 30px;
    width: 65%;
    margin: 0px 50px;
    color: ${font};
    @media only screen and (max-width: 600px){
      width: 100%;
     
    }
  `;

    return (

    <Styles className="container"  onClick={selectedCategory}>
    <input type="checkbox"></input>
    <span className="checkmark"></span>
    <p>{props.seguro.name}</p>
    </Styles>)
  };

  const seguros = [
    { name: "Coche", id: "1" },
    { name: "Moto", id: "2" },
    { name: "Salud", id: "3" },
    { name: "Descesos", id: "4" },
    { name: "Vida", id: "5" },
  ];

  return (
    <div className="listas-grid">
      <div className="grid-checkboxes">
        {/* <ResponsiveLabel>
          <label className="container">
            <p>Que seguro buscas?</p>
          </label>
        </ResponsiveLabel> */}

        {seguros.map((seguro) => {
          return (
            <SelectedCategory seguro={seguro}>
              
            </SelectedCategory>
          );
        })}
      </div>
    </div>
  );
};

export default ListaNav;
